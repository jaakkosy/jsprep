const modelid = document.getElementById('modelid')
const modelname = document.getElementById('modelname')
const modeldesc = document.getElementById('modeldesc')
const dryweight = document.getElementById('dryweight')
const wetweight = document.getElementById('wetweight')
const startdate = document.getElementById('startdate')
const compdate = document.getElementById('compdate')
const examination = document.getElementById('examination')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  let lista = [];

  if (modelid.value === '' || modelid.value == null || isNaN(modelid.value)) {
    messages.push('Model has to be number')
  }

  if (modelname.value === '' || modelname.value == null ) {
    messages.push('Model name is required')
  }
  
  if (modeldesc.value === '' || modeldesc.value == null ) {
    messages.push('Model description is required')
  }

  if (modeldesc.value === '' || modeldesc.value == null ) {
    messages.push('Dry weight is required')
  }

  if (dryweight.value === '' || dryweight.value == null ) {
    messages.push('Wet weight is required')
  }
  if (wetweight.value === '' || wetweight.value == null ) {
    messages.push('Wet weight is required')
  }
  const pyöräKuormaaja = {"Malli id": modelid};
  lista.push(pyöräKuormaaja);
  console.log(lista)

  // jos on virheitä, preventDevault estää submit painikkeen painamisen
  // ja kerää kaikki virheet listaan, jonka jälkeen kertoo ne käyttäjälle

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

  if (messages.length === 0) {
    
    console.log("testi1")

    localStorage.setItem("testi", "terkkuja localStoragesta o/");
    const inputData = {modelId: modelid.value,
                      modelName: modelname.value,
                      description: modeldesc.value,
                      dryWeight: dryweight.value,
                      wetWeight: wetweight.value,
                      productionStarted: startdate.value,
                      productionCompleted: compdate.value,
                      examination: examination.value}

    // convert object to JSON string
  const userSelectionString = JSON.stringify(inputData);
  console.log(userSelectionString);


  // save to localStorage
  localStorage.setItem(inputData.modelId, userSelectionString);

  // get from localStorage
  let selection = localStorage.getItem("2500");

  // parse back to object
  let selectionObject = JSON.parse(selection);

  console.log(selectionObject.modelId);

  console.log("testi2")
                      
  }
})

