'use strict';

const API_URL = 'https://viacep.com.br/ws';
const CEP_REGEX = /^[0-9]{5}-?[0-9]{3}$/;

const elements = {
    cep: document.getElementById('cep'),
    btnBuscar: document.getElementById('btnBuscar'),
    btnText: document.getElementById('btnText'),
    btnLoading: document.getElementById('btnLoading'),
    resultado: document.getElementById('resultado'),
    alertContainer: document.getElementById('alert-container'),
    logradouro: document.getElementById('logradouro'),
    bairro: document.getElementById('bairro'),
    complemento: document.getElementById('complemento'),
    localidade: document.getElementById('localidade'),
    uf: document.getElementById('uf')
};

function formatCEP(value) {
    value = value.replace(/\D/g, '');
    if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    }
    return value;
}

function isValidCEP(cep) {
    const cleanCEP = cep.replace(/\D/g, '');
    return CEP_REGEX.test(cep) && cleanCEP.length === 8;
}

function cleanCEP(cep) {
    return cep.replace(/\D/g, '');
}

function showAlert(message, type = 'danger') {
    const alertHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <i class="bi bi-${getAlertIcon(type)} me-2"></i>
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
        </div>
    `;
    
    elements.alertContainer.innerHTML = alertHTML;
    
    setTimeout(() => {
        const alert = elements.alertContainer.querySelector('.alert');
        if (alert) {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        }
    }, 5000);
}

function getAlertIcon(type) {
    const icons = {
        success: 'check-circle-fill',
        danger: 'x-circle-fill',
        warning: 'exclamation-triangle-fill',
        info: 'info-circle-fill'
    };
    return icons[type] || icons.info;
}

function toggleLoading(isLoading) {
    if (isLoading) {
        elements.btnText.classList.add('d-none');
        elements.btnLoading.classList.remove('d-none');
        elements.btnBuscar.disabled = true;
        elements.cep.disabled = true;
    } else {
        elements.btnText.classList.remove('d-none');
        elements.btnLoading.classList.add('d-none');
        elements.btnBuscar.disabled = false;
        elements.cep.disabled = false;
    }
}

function toggleResultado(show) {
    if (show) {
        elements.resultado.classList.remove('resultado-hidden');
        elements.resultado.classList.add('resultado-visible');
    } else {
        elements.resultado.classList.remove('resultado-visible');
        elements.resultado.classList.add('resultado-hidden');
    }
}

function limparCampos() {
    elements.logradouro.value = '';
    elements.bairro.value = '';
    elements.complemento.value = '';
    elements.localidade.value = '';
    elements.uf.value = '';
}

function preencherEndereco(data) {
    if (data.erro) {
        showAlert('CEP não encontrado. Verifique o número digitado.', 'warning');
        limparCampos();
        toggleResultado(false);
        return;
    }

    elements.logradouro.value = data.logradouro || 'Não informado';
    elements.bairro.value = data.bairro || 'Não informado';
    elements.complemento.value = data.complemento || 'Não informado';
    elements.localidade.value = data.localidade || 'Não informado';
    elements.uf.value = data.uf || '';

    toggleResultado(true);
    showAlert('CEP encontrado com sucesso!', 'success');
}

async function buscarCEP(cep) {
    if (!isValidCEP(cep)) {
        showAlert('CEP inválido! Digite um CEP válido no formato 00000-000', 'danger');
        elements.cep.focus();
        return;
    }

    const cleanedCEP = cleanCEP(cep);
    
    toggleLoading(true);
    limparCampos();
    toggleResultado(false);
    elements.alertContainer.innerHTML = '';

    try {
        const response = await fetch(`${API_URL}/${cleanedCEP}/json/`, {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        preencherEndereco(data);

    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        showAlert(
            'Erro ao buscar o CEP. Verifique sua conexão e tente novamente.',
            'danger'
        );
        limparCampos();
        toggleResultado(false);
    } finally {
        toggleLoading(false);
    }
}

elements.cep.addEventListener('input', (event) => {
    event.target.value = formatCEP(event.target.value);
});

elements.cep.addEventListener('blur', () => {
    const cep = elements.cep.value.trim();
    if (cep) {
        buscarCEP(cep);
    }
});

elements.cep.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const cep = elements.cep.value.trim();
        if (cep) {
            buscarCEP(cep);
        }
    }
});

elements.btnBuscar.addEventListener('click', () => {
    const cep = elements.cep.value.trim();
    if (cep) {
        buscarCEP(cep);
    } else {
        showAlert('Por favor, digite um CEP para buscar.', 'warning');
        elements.cep.focus();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Aplicação iniciada com sucesso!');
    elements.cep.focus();
    toggleResultado(false);
});

window.addEventListener('error', (event) => {
    console.error('Erro global capturado:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Promise rejeitada não tratada:', event.reason);
});

