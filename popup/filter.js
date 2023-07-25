var tags = [
        
        {id:0,value:"Jaune Arc/Everyone"},
       
];

function _tr(){
    return document.createElement("tr");
}

function _td(){
    return document.createElement("td");
}

function _button(text){
    var button = document.createElement("input");
    button.type="button";
    button.value=text;
    return button;
}

function _textInput(text){
    var textInput = document.createElement("input");
    textInput.type="input";
    textInput.value=text;
    return textInput;
}

function focusLastInput(){
    const inputs = document.getElementById("tag_table").getElementsByTagName("input");
    var inputToFocus = null;
    for(var i = 0; i < inputs.length; ++i){
        const input = inputs[i];
        if(input.type == "text")
            inputToFocus = input;
    }
    if(inputToFocus){
        inputToFocus.focus();
    }
}

function removeTagFromFilter(id){
    tags = tags.filter(tag => tag.id != id);
    createFilterUI(tags);
}

function addNew(){
    if(tags[tags.length-1].value.trim() == ""){
        focusLastInput();
        return;
    }
    var highestIdx = 0;
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        if(tag.id >= highestIdx){
            highestIdx = tag.id + 1;
        }
    }
    var newFilter = {"id":highestIdx,"value":""}
    tags.push(newFilter);
    createFilterUI(tags);
}


function createFilterUI(filter){
    const _table = document.getElementById("tag_table");

    for(var i = _table.childElementCount -1; i >= 0; --i){
        _table.removeChild(_table.children[i]);
    }

    for (let id = 0; id < filter.length; id++) {
        const tag= filter[id];
        const tr = _tr();
        const labelTd = _td();
        const labelSpan  = _textInput(tag.value);
        const buttonTd = _td();
        const button = _button("delete");
        
        button.onclick = function(){ 
            removeTagFromFilter(tag.id);
        }

        labelTd.appendChild(labelSpan);
        buttonTd.appendChild(button);
        tr.appendChild(labelTd);
        tr.appendChild(buttonTd);
        _table.appendChild(tr);        
    };

    /*
    <tr>
        <td><input type="button" value="add"/></td>
    </tr>
    <tr>
        <td><input type="submit" value="save"/></td>
    </tr>
    */

    const addTr = _tr();
    const addTd = _td();
    const add = _button("add");

    const saveTr = _tr();
    const saveTd = _td();
    const save = _button("save");


    add.onclick = addNew;

    addTr.appendChild(addTd);
    addTd.appendChild(add);

    saveTr.appendChild(saveTd);
    saveTd.appendChild(save);

    _table.appendChild(addTr);
    _table.appendChild(saveTr);

    focusLastInput();
}

/*

<tr>
    <td><span>Jaune Arc</td>
    <td><input type="button" value="delete"/></td>
</tr>
<tr>
    <td><input type="text" ng-value="tag.value"></td>
/<tr>
*/

window.onload = function(){
    createFilterUI(tags);
}