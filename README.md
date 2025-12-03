# 🔍 Consulta CEP - ViaCEP API

> Aplicação moderna e responsiva para consulta de CEP utilizando a API ViaCEP

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site/deploys)

## 📋 Sobre o Projeto

Aplicação web que permite consultar informações de endereço através do CEP (Código de Endereçamento Postal) brasileiro. Após o usuário digitar o CEP, o sistema consulta a [API ViaCEP](https://viacep.com.br) e preenche automaticamente os campos com os dados do endereço.

## ✨ Funcionalidades

- 🔎 **Busca Automática**: Consulta o CEP ao perder o foco do campo ou ao clicar no botão
- ⌨️ **Máscara de CEP**: Formata automaticamente para o padrão 00000-000
- ✅ **Validação em Tempo Real**: Valida o formato do CEP antes de fazer a requisição
- 📱 **100% Responsivo**: Interface adaptada para desktop, tablet e mobile
- 🎨 **Design Moderno**: Interface limpa e intuitiva com animações suaves
- ⚡ **Performance**: Carregamento rápido e otimizado
- ♿ **Acessível**: Seguindo as melhores práticas de acessibilidade
- 🎯 **Feedback Visual**: Alertas e mensagens para melhor experiência do usuário

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com animações
- **JavaScript ES6+** - Lógica da aplicação com async/await
- **Bootstrap 5.3** - Framework CSS via CDN
- **Bootstrap Icons** - Ícones modernos
- **ViaCEP API** - API pública de consulta de CEP

## 📦 Estrutura do Projeto

```
api-via-cep/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos customizados
├── js/
│   └── app.js         # Lógica da aplicação
└── README.md          # Documentação
```

## 🎯 Como Usar

1. **Acesse a aplicação** no seu navegador
2. **Digite o CEP** no campo de busca (apenas números ou com hífen)
3. **Aguarde** a busca automática ou clique em "Buscar"
4. **Visualize** os dados do endereço preenchidos automaticamente

### Exemplos de CEP para teste:
- `01310-100` - Av. Paulista, São Paulo - SP
- `20040-020` - Centro, Rio de Janeiro - RJ
- `40301-110` - Salvador - BA
- `70040-902` - Brasília - DF

## 💻 Instalação Local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/api-via-cep.git

# Entre no diretório
cd api-via-cep

# Abra o arquivo index.html no navegador
# Ou use um servidor local como Live Server (VS Code)
```

## 🌐 Deploy na Netlify

### Opção 1: Deploy via Git

1. Faça push do projeto para o GitHub
2. Acesse [Netlify](https://netlify.com)
3. Clique em "New site from Git"
4. Selecione seu repositório
5. Configure:
   - **Build command**: (deixe vazio)
   - **Publish directory**: `/`
6. Clique em "Deploy site"

### Opção 2: Deploy via Drag & Drop

1. Acesse [Netlify Drop](https://app.netlify.com/drop)
2. Arraste a pasta do projeto
3. Pronto! Seu site estará no ar

### Opção 3: Deploy via CLI

```bash
# Instale o Netlify CLI
npm install -g netlify-cli

# Faça login
netlify login

# Deploy
netlify deploy --prod
```

## 🎨 Personalização

### Cores

Edite as variáveis CSS no arquivo `css/style.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --success-color: #10b981;
    --danger-color: #ef4444;
    --warning-color: #f59e0b;
}
```

### Animações

As animações podem ser customizadas nas classes:
- `.card-custom` - Animação do card
- `.resultado-visible` - Animação dos resultados
- `.alert` - Animação dos alertas

## 🔧 Funcionalidades Técnicas

### Validação de CEP
```javascript
const CEP_REGEX = /^[0-9]{5}-?[0-9]{3}$/;
```

### Máscara Automática
- Formata automaticamente para 00000-000
- Remove caracteres não numéricos

### Tratamento de Erros
- Validação de formato
- Tratamento de CEP não encontrado
- Tratamento de erros de conexão
- Feedback visual para o usuário

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a diferentes tamanhos de tela:

- **Desktop** (> 992px): Layout em 2 colunas
- **Tablet** (768px - 991px): Layout adaptado
- **Mobile** (< 768px): Layout em coluna única

## ♿ Acessibilidade

- Uso adequado de tags semânticas
- Labels associados aos inputs
- Atributos ARIA quando necessário
- Contraste de cores adequado
- Navegação por teclado
- Foco visível nos elementos interativos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Ricardo Araujo Santos**

- GitHub: [@ricardoaraujosantos](https://github.com/ricardoaraujosantos)

## 🙏 Agradecimentos

- [ViaCEP](https://viacep.com.br) - API pública gratuita
- [Bootstrap](https://getbootstrap.com) - Framework CSS
- [Bootstrap Icons](https://icons.getbootstrap.com) - Biblioteca de ícones

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Se você encontrar algum problema ou tiver sugestões:

- Abra uma [issue](https://github.com/seu-usuario/api-via-cep/issues)
- Entre em contato via [email](mailto:seu-email@exemplo.com)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!

**Desenvolvido com ❤️ por Ricardo Araujo Santos**

