# Usa a imagem base do Node.js
FROM node:18

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de configuração de dependência
COPY package*.json ./

# Instala as dependências do projeto de forma limpa
RUN npm ci

# Copia o resto dos arquivos da aplicação
COPY . .

# Constrói a aplicação para produção
RUN npm run build

# Expõe a porta que a aplicação vai rodar
EXPOSE 4173

# Define o comando para iniciar a aplicação
CMD ["npm", "run", "start"]