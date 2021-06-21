
var buttons = document.querySelectorAll(".noun");
var form = document.querySelector('form');
var set = document.querySelector('.set');
var newItem = document.querySelector('#newItem');
var generate = document.querySelector('#generate');
var deleteButton = document.querySelector('#delete');
document.querySelector('#gR').style.display = 'none';
var list = ['霓虹', '甜心', '夏日', '温暖', '冬日', '暖阳', '幽香', '彩虹', '波光', '冰激凌' , '冰块', '知了', '少女', '微风', '西瓜', '蜂蜜', '晚霞', '月光', '甜甜圈'];

for(var i = 0; i<list.length;i++){
    set.innerHTML += '<button class="noun" onclick="Delete(this);">' + list[i] + '</button>';
}
form.addEventListener('submit', function(){
    var text = newItem.value;
    if(text !==''){
        if(list.includes(text)){
            alert('这个词语已经存在');
        }else{
            set.innerHTML += '<button class="noun" onclick="Delete(this);">' + text + '</button>';
            list[list.length] = text;
        }
        
    }
    newItem.value = '';
});

generate.addEventListener("click", function(){
    var ran1 = Math.floor(Math.random()*list.length);
    var ran2 = Math.floor(Math.random()*list.length);
    console.log('selected ' + list[ran1] + list[ran2] );
    while(ran1 == ran2){
        ran2 = Math.floor(Math.random()*list.length);
    }
    // generate results and change DOM
    document.querySelector('#initR').style.display = 'none';
    document.querySelector('#gR').style.display = 'inherit';
    document.querySelector('#r1').innerHTML = list[ran1];
    document.querySelector('#r1').addEventListener("click", function(){
    console.log("clicked");
    var n_ran1 = ran1;
    while(n_ran1 == ran2 || n_ran1 == ran1){
        n_ran1 = Math.floor(Math.random()*list.length);
        
    }
        document.querySelector('#r1').innerHTML = list[n_ran1];
    });
    document.querySelector('#r2').innerHTML = list[ran2];
    document.querySelector('#r2').addEventListener("click", function(){
    var n_ran2 = ran2;
    while(n_ran2 == ran2 || n_ran2 == ran1){
        n_ran2 = Math.floor(Math.random()*list.length);
    }
        document.querySelector('#r2').innerHTML = list[n_ran2];
    });
    //result.innerHTML = list[ran1] + list[ran2];
})

deleteButton.addEventListener("click", function(){
    list = [];
    set.innerHTML = '';
})


for(var i =0; i<buttons.length; i++){
  console.log('added');
  document.querySelectorAll(".noun")[i].addEventListener("click", function(){this.remove()});
  list[list.length] = document.querySelectorAll(".noun")[i].innerHTML;
  console.log(list);
}

function Delete(currentEl){
    for(var i = 0; i<list.length;i++){
        if(list[i] == currentEl.innerHTML){
            delete list[i];
        }
    } 
    currentEl.parentNode.removeChild(currentEl);
}


