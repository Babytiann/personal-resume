document.querySelector('.switch-icon').addEventListener('click', () =>{
    let currentpath = window.location.pathname;
    let currentname = currentpath.substring(currentpath.lastIndexOf('/') + 1);
    if(currentname === 'index.html'){
        window.location.href = 'English.html';
    }
    else if(currentname === 'English.html'){
        window.location.href = 'index.html';
    }
});  
document.querySelector('.print-icon').addEventListener('click', () => {
    window.print();
});
