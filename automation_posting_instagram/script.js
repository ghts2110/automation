const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const videoPath = path.resolve('bolo de morango em outros idiomas vídeo meme.mp4');
    const postDescription = "Dia 3 - Provando para minha ex que consigo ter mais seguidores postando um vídeo do Pica-Pau falando 'bolo de morango' do que ela postando foto da raba.";

    // Abre o navegador no modo mobile
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Define o modo mobile manualmente
    await page.setViewport({
        width: 375,
        height: 812,
        isMobile: true,
        hasTouch: true,
        deviceScaleFactor: 2,
    });

    // Acessa a página de login do Instagram
    await page.goto('https://www.instagram.com/accounts/login/');

    // Faz login
    await page.waitForSelector('input[name="username"]');
    await page.type('input[name="username"]', 'b0l0dem0rang0', { delay: 100 });
    await page.type('input[name="password"]', 'Senha123!', { delay: 100 });
    await page.click('button[type="submit"]');

    await page.waitForNavigation();
    console.log('Login feito com sucesso!');

    // Espera até que o ícone de criar postagem esteja visível
    try {
        await page.waitForSelector('svg[aria-label="New post"]', { timeout: 10000 });
        await page.click('svg[aria-label="New post"]');

        console.log("Botão 'Nova publicação' encontrado e clicado.");
    } catch (error) {
        console.log("Não foi possível encontrar o botão 'Nova publicação'.");
    }

    // Espera o seletor de upload de arquivos aparecer e clica para abrir o "file chooser"
    try {
        await page.waitForSelector('input[type="file"]', { timeout: 15000 });
        const inputFile = await page.$('input[type="file"]');
        
        // Usa o fileChooser para interagir com o seletor de upload de arquivo
        await inputFile.uploadFile(videoPath);
        console.log("Vídeo enviado com sucesso!");
    } catch (error) {
        console.log("Erro ao encontrar o seletor de upload de arquivo: ", error);
    }

    // Espera o botão OK (confirmar) aparecer e clica
    try {
        await page.waitForSelector('button._acan._acap._acaq._acas._acav._aj1-._ap30', { timeout: 10000 });
        await page.click('button._acan._acap._acaq._acas._acav._aj1-._ap30');
        console.log("Botão 'OK' clicado.");
    } catch (error) {
        console.log("Erro ao encontrar o botão 'OK':", error);
    }

    // Interage com o botão "Next"
    try {
        await page.waitForSelector('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.xyamay9.x1pi30zi.x1l90r2v.x1swvt13.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1');
        const nextButton = await page.$('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.xyamay9.x1pi30zi.x1l90r2v.x1swvt13.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 div[role="button"]');
        
        if (nextButton) {
            await nextButton.click();
            console.log("Botão 'Next' clicado.");
        } else {
            console.log("Botão 'Next' não encontrado.");
        }
    } catch (error) {
        console.log("Erro ao encontrar o botão 'Next':", error);
    }

    try {
        await page.waitForSelector('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.xyamay9.x1pi30zi.x1l90r2v.x1swvt13.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1');
        const nextButton = await page.$('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.xyamay9.x1pi30zi.x1l90r2v.x1swvt13.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 div[role="button"]');
        
        if (nextButton) {
            await nextButton.click();
            console.log("Botão 'Next' clicado.");
        } else {
            console.log("Botão 'Next' não encontrado.");
        }
    } catch (error) {
        console.log("Erro ao encontrar o botão 'Next':", error);
    }

    // Preenche a descrição do post
    try {
        await page.waitForSelector('div[aria-placeholder="Write a caption..."]', { timeout: 10000 });
        await page.type('div[aria-placeholder="Write a caption..."]', postDescription, { delay: 100 });
        console.log("Descrição adicionada.");
    } catch (error) {
        console.log("Erro ao adicionar a descrição do post:", error);
    }

    // Publica o post
    try {
        await page.waitForSelector('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.xyamay9.x1pi30zi.x1l90r2v.x1swvt13.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1');
        const nextButton = await page.$('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.xyamay9.x1pi30zi.x1l90r2v.x1swvt13.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 div[role="button"]');
        
        if (nextButton) {
            await nextButton.click();
            console.log("Post compartilhado com sucesso!");
        } else {
            console.log("Botão 'Post' não encontrado.");
        }
    } catch (error) {
        console.log("Erro ao compartilhar o post:", error);
    }

    
    //   // Fecha o navegador
    //   await browser.close();
})();
