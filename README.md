# Solução do desafio
A minha interpretação do texto do desafio foi que era necessário implementar uma solução usando apenas 
**HTML**, **CSS** e **Javascript**, sem o auxílio de frameworks como **React**. Mas como eu tive tempo 
de sobra, resolvi implementar as duas versões (Vanilla e React).

As implementações estão separadas por diretórios, mas na mesma branch, pra evitar qualquer problema
(por exemplo, um pull request ser analisado e o outro não).

<br>

---

### Implementação JavaScript puro
**Live at:**
```
https://vanilla-challenge-pelle.netlify.com
```

<br>

**Utilização:** use o navegador de sua preferência para abrir o arquivo
```
/Vanilla/src/index.html
```

<br>

---

### Implementação com React.js
**Live at:**
```
https://react-challenge-pelle.netlify.com
```

<br>


**Utilização:** em um computador com Node.js instalado, siga as instruções

1 - Acesse o diretório React
```
cd React
```

<br>

2 - Baixe as dependências do projeto
```
yarn install
- ou -
npm install
```

<br>

3.1.1 - Execute o servidor de desenvolvimento, para rodar a aplicação localmente
```
yarn run dev
- ou -
npm run dev
```
3.1.2 - O servidor de desenvolvimento pode ser acessado em
```
http://localhost:8080
```

<br>

3.2.1 - Ou se preferir gerar o bundle, para rodar a aplicação em um servidor
```
yarn run build
- ou -
npm run build
```
3.2.2 - O bundle com a aplicação fica dentro da pasta
```
/React/dist/
```
