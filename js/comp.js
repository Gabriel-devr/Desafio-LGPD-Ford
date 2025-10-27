class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.Nome = nome;
        this.Preco = preco;
        this.AlturaCacamba = alturaCacamba;
        this.AlturaVeiculo = alturaVeiculo;
        this.AlturaSolo = alturaSolo;
        this.CapacidadeCarga = capacidadeCarga;
        this.Motor = motor;
        this.Potencia = potencia;
        this.VolumeCacamba = volumeCacamba;
        this.Roda = roda;
        this.Image = image;
    }
}

const carsObject = {
    'xl-cabine': new Car('XL Cabine Simples 2.2 Diesel 4X4 MT 2022', 183850, 511, 1821, 232, 1234, 2.2, 160, 1420, 'Aço Estampado 16', 'img/XL Cabine.jpg'),
    'xls-diesel': new Car('XLS 2.2 Diesel 4X4 AT 2022', 220690, 511, 1821, 232, 1076, 2.2, 160, 1180, 'Aço Estampado 16', 'img/xls 2.2 diesel.jpg'),
    'storm-diesel': new Car('Storm 3.2 Diesel 4X4 AT 2022', 222790, 511, 1821, 232, 1040, 3.2, 200, 1180, 'Liga Leve 17', 'img/storm.jpg')
}

const compareButton = document.querySelector('#compareButton');
const compareTableDiv = document.querySelector('#compare');

compareButton.addEventListener('click', handleCompareClick)

function handleCompareClick() {
    const checkedboxes = document.querySelectorAll('.checkbox:checked')//Esta linha encontra todos os checkboxes que foram marcados pelo usuário no momento em que o botão "Comparar" foi clicado.
    if (checkedboxes.length !== 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    //.dataset: É uma propriedade especial em JavaScript que dá acesso a todos os atributos customizados data-* de um elemento HTML.
    //carId: É a forma como o JavaScript lê o atributo data-car-id. O JavaScript converte automaticamente o nome do atributo de kebab-case (com hífen) para camelCase (com letra maiúscula no meio).
    const carId1 = checkedboxes[0].dataset.carId;
    const carId2 = checkedboxes[1].dataset.carId;

    const car1 = carsObject[carId1]
    const car2 = carsObject[carId2]

    compareTable(car1, car2)
}


function compareTable(carA, carB) {

    //CarA
    document.getElementById('compare_image_0').innerHTML = `<img src="${carA.Image}" width="150">`;
    document.getElementById('compare_modelo_0').innerText = carA.Nome;
    document.getElementById('compare_alturacacamba_0').innerText = carA.AlturaCacamba;
    document.getElementById('compare_alturaveiculo_0').innerText = carA.AlturaVeiculo;
    document.getElementById('compare_alturasolo_0').innerText = carA.AlturaSolo;
    document.getElementById('compare_capacidadecarga_0').innerText = carA.CapacidadeCarga;
    document.getElementById('compare_motor_0').innerText = carA.Motor;
    document.getElementById('compare_potencia_0').innerText = carA.Potencia;
    document.getElementById('compare_volumecacamba_0').innerText = carA.VolumeCacamba;
    document.getElementById('compare_roda_0').innerText = carA.Roda;
    document.getElementById('compare_preco_0').innerText = carA.Preco;

    document.getElementById('compare_image_1').innerHTML = `<img src="${carB.Image}" width="150">`;
    document.getElementById('compare_modelo_1').innerText = carB.Nome;
    document.getElementById('compare_alturacacamba_1').innerText = carB.AlturaCacamba;
    document.getElementById('compare_alturaveiculo_1').innerText = carB.AlturaVeiculo;
    document.getElementById('compare_alturasolo_1').innerText = carB.AlturaSolo;
    document.getElementById('compare_capacidadecarga_1').innerText = carB.CapacidadeCarga;
    document.getElementById('compare_motor_1').innerText = carB.Motor;
    document.getElementById('compare_potencia_1').innerText = carB.Potencia;
    document.getElementById('compare_volumecacamba_1').innerText = carB.VolumeCacamba;
    document.getElementById('compare_roda_1').innerText = carB.Roda;
    document.getElementById('compare_preco_1').innerText = carB.Preco;

    compareTableDiv.style.display = 'block';
    //No seu HTML, a <div id="compare"> está inicialmente escondida (provavelmente com display: none; no seu CSS, ou simplesmente não visível por padrão). Ao definir o display dela para 'block', você está dizendo ao navegador: "Ok, agora mostre este elemento. Trate-o como um bloco padrão, fazendo com que ele apareça na tela e ocupe seu próprio espaço".
}

function HideCompare() {
    compareTableDiv.style.display = 'none';
    //EXPLIQUE: porque usar o display none
}

