const pertanyaan =document.getElementById('pertanyaan')
const jawaban=document.getElementById('jawaban')
const loaders=document.getElementById('loaders')
const container=document.getElementsByClassName('container')
const ketawa=document.getElementById('ketawa')
const oghey=document.getElementById('oghey')

let init =0

const botSay = (data) => {
    return [
        "Halo, perkenalkan nama saya secretbot. Siapa nama kamu?",
        `Halo ${data?.nama}, usia kamu berapa?`,
        `Ohhh ${data?.usia}, hobi kamu apa ya?`,
        `waww sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
        `Ohhh ${data?.pacar}, kalo kamu jadi pacar aku mau gak?`,
        `Apaaa!!! Kamu mau? Yaudah besok kita langsung jalan bareng aja ya!`,
        
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    if(jawaban.value.length <1) return Swal.fire('Silahkan isi jawaban terlebih dahulu')
    init++
    if (init == 1) {
        botDelay({nama: jawaban.value})
    } else if (init == 2) {
        botDelay({usia: jawaban.value})
    } else if (init == 3) {
        botDelay({hobi: jawaban.value})
    } else if (init == 4) {
        botDelay({pacar: jawaban.value})
    } else if (init == 5) {
        botDelay({okeh: jawaban.value})
        oghey.style.display= "none"
        ketawa.style.display= "block"
        jawaban.style.display="none"
    } else {
        botEnd()
        loaders.style.display= "block"
        container[0].style.filter="blur(8px)"
        setTimeout( () => {
        loaders.style.display= "none"
        container[0].style.filter="none"
        }, [1000])
        oghey.textContent="Okey"
    }
}

function botUnder() {
    init++
    if (init == 6) {
        finishing()
        loaders.style.display= "block"
        container[0].style.filter="blur(8px)"
        setTimeout( () => {
        loaders.style.display= "none"
        container[0].style.filter="none"
        }, [1000])
        ketawa.style.display= "none"
        oghey.style.display= "block"
        
        
    } 
}

function botDelay(jawabanUser) {
    loaders.style.display= "block"
    container[0].style.filter="blur(8px)"
    setTimeout( () => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    loaders.style.display= "none"
    container[0].style.filter="none"
    }, [1000])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thank u ya ${usersData[0]} udah main ke secretbot ini,
    lain kali kita main ${usersData[2]} bareng ya!`
    jawaban.value = "siap thanks juga!"
}

function botEnd() {
    alert(`Terima Kasih ${usersData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama kembali`)
    window.location.reload()
}