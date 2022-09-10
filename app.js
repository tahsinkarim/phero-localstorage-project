const getValueById = (id) =>{
    const element = document.getElementById(id);
    const elementValue = element.value;
    element.value = '';
    return elementValue;
}

const setValueById = (id, value) =>{
    const element = document.getElementById(id);
    element.value = value;
}


const submit = () =>{
    const name = getValueById('name')
    const email = getValueById('email')
    const message = getValueById('message')

    addToLocal('name', name)
    addToLocal('email', email)
    addToLocal('message', message)
}

const getObjFromLocal = () =>{
    let getObj = localStorage.getItem('obj')
    let obj = {}

    if(getObj){
        obj = JSON.parse(getObj)
    }
    return obj
}

const addToLocal = (key, value) =>{
    const obj = getObjFromLocal();
    obj[key] = value
    const objStr = JSON.stringify(obj)
    localStorage.setItem('obj',objStr)
}

const displayOnLoad = () =>{
    let getObj = localStorage.getItem('obj')
    let obj = {}

    if(getObj){
        obj = JSON.parse(getObj)
        setValueById('name', obj.name)
        setValueById('email', obj.email)
        setValueById('message', obj.message)   
    } else {
        setValueById('name', 'example')
        setValueById('email', 'example@email')
        setValueById('message', 'example message')   
    }
}

document.getElementById('reset').addEventListener('click', function(){
    localStorage.clear()
})

displayOnLoad();
