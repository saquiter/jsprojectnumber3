(function(){
    const from = document.getElementById("from");
    const to = document.getElementById("to");
    const res = document.getElementById('res');
    const btn = document.getElementById("generate");
    btn.onclick = () =>{
        let result = "";
        for(let i = from.value;i <= to.value;++i){
            result = Math.round(Math.random() * i);
            if(result === 0){
                result++;
            }
        }
        res.innerHTML = Number(result);
    }
})();