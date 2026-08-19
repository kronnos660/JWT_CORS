# Atividade Prática Individual - JWT + CORS (BE -B3S16A2)

Esta pasta contém todos os arquivos organizados para a entrega no Google Drive da turma.

## 📁 Estrutura de Arquivos

```
nome_do_aluno_JWT_CORS/
├── server.js          # Código da API backend (Express + JWT + CORS)
├── index.html         # Código frontend para publicação no GitHub Pages
├── package.json       # Dependências do Node.js
└── README.md          # Instruções de uso e checklist de entrega
```

## 🚀 Como Executar o Backend (API)

1. Certifique-se de ter o **Node.js** instalado.
2. Abra o terminal na pasta dos arquivos e instale as dependências:
   ```bash
   npm install
   ```
3. Abra o arquivo `server.js` e ajuste a propriedade `origin` da constante `corsOptions` com a sua URL do GitHub Pages:
   ```javascript
   origin: 'https://seu-usuario.github.io/nome-do-repositorio'
   ```
4. Inicie o servidor:
   ```bash
   node server.js
   ```

## 🌐 Como Subir o Frontend no GitHub Pages

1. Crie ou utilize um repositório no GitHub.
2. Adicione o arquivo `index.html` na raiz do seu repositório.
3. Vá em **Settings > Pages** no repositório GitHub e ative o **GitHub Pages** a partir da branch `main` ou `master`.

## 🧪 Como Realizar os Testes para Tirar os Prints da Entrega

### **Print 1: Sucesso (Login + Mudar Cor)**
1. Acesse o seu site no GitHub Pages.
2. Clique no botão **1. Fazer Login** (o status mudará para "Autenticado com Sucesso!").
3. Clique no botão **2. Mudar Cor do Card** (o quadrado mudará para verde).
4. Tire um **print completo da tela** mostrando o card verde e o status.

### **Print 2: Bloqueio (Sem Token ou Erro de CORS)**
* **Opção A (Sem Token):** Recarregue a página (sem clicar em Login) e clique direto em **2. Mudar Cor do Card**. Aparecerá o alerta de erro `Acesso negado ou token inválido`.
* **Opção B (Erro de CORS):** Abra a ferramenta de desenvolvedor (`F12`), acesse a aba **Console**, e execute a chamada vindo de outra origem (ou testando do GitHub Pages de outro colega). O console exibirá o bloqueio da política de CORS.
* Tire um print do **Console do Navegador (F12)** mostrando a mensagem de erro.

## 📂 Formato de Entrega no Google Drive
1. Vá até a pasta `Atividade_JWT_CORS` do seu Grupo no Drive.
2. Crie uma pasta individual: `SeuNome_JWT_CORS`.
3. Insira o arquivo `server.js` e os **2 Prints da tela/console**.
