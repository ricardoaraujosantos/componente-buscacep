# 🚀 Deploy na Netlify

## Método 1: Deploy via Interface Web (Mais Fácil)

1. Acesse https://app.netlify.com
2. Faça login ou crie uma conta
3. Clique em "Add new site" > "Deploy manually"
4. Arraste a pasta `api-via-cep` para a área de upload
5. Aguarde o deploy finalizar
6. Sua aplicação estará no ar em segundos!

## Método 2: Deploy via Git

1. Inicialize o Git e faça push para o GitHub:

```bash
cd /home/ricardo/Documentos/pessoal/api-via-cep
git init
git add .
git commit -m "feat: consulta de CEP moderna e responsiva"
git branch -M main
git remote add origin SEU_REPOSITORIO
git push -u origin main
```

2. No Netlify:
   - Clique em "Add new site" > "Import an existing project"
   - Conecte com GitHub
   - Selecione o repositório
   - Configurações:
     - Build command: (deixe vazio)
     - Publish directory: `/`
   - Clique em "Deploy site"

## Método 3: Deploy via CLI

```bash
npm install -g netlify-cli
netlify login
cd /home/ricardo/Documentos/pessoal/api-via-cep
netlify deploy --prod
```

## Após o Deploy

Seu site estará disponível em um domínio como:
- `https://nome-aleatorio.netlify.app`

Você pode personalizar o domínio nas configurações do site.

## Domínio Personalizado (Opcional)

1. No painel da Netlify, vá em "Domain settings"
2. Clique em "Add custom domain"
3. Digite seu domínio
4. Configure os DNS conforme instruções

## Atualizações Futuras

Para atualizar o site:
- **Método 1**: Arraste a pasta novamente no Netlify
- **Método 2**: Faça push para o repositório Git
- **Método 3**: Execute `netlify deploy --prod`

## Configurações Já Incluídas

✅ Arquivo `netlify.toml` com headers de segurança
✅ Arquivo `.gitignore` para arquivos desnecessários
✅ Otimização de cache para CSS e JS
✅ Redirecionamento para index.html

## Testar Localmente

Use qualquer servidor HTTP simples:

```bash
python3 -m http.server 8000

npx serve

php -S localhost:8000
```

Acesse: http://localhost:8000

