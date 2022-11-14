async function inicio() {

  return {
    statusCode: 200,
    body: "Página inicio!"
  }
}

async function teste(event) {

  return {
    statusCode: 200,
    body: JSON.stringify(event)
  }
}

async function produto(event) {

  const codigo = event.pathParameters.codigo

  return {
    statusCode: 200,
    body: JSON.stringify({
      mensagem: "Página produto!",
      produto: codigo || "Código não digitado"
    })
  }
}

async function contato(event) {

  const parametro = event.queryStringParameters

  const email = parametro ? parametro.email : "meunome@mail.com"
  const celular = parametro ? parametro.celular : "+55 11 98888-7777"

  return {
    statusCode: 200,
    body: JSON.stringify({
      mensagem: "Página contato!",
      email: email,
      celular: celular
    })
  }
}

module.exports = { inicio, teste, produto, contato }