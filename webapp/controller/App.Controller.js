sap.ui.define([
    "sap/ui/core/mvc/Controller" 
],(Controlador) => {
    "usar estrito";
    
    return Controlador.extend("ui5.walkthrough.controller.App",{
        onInit: function () {
            this._count = 0;
        },
        onShowHello(){
            this._count++;                  
            alert("OLOKO BICHO\nContador: " + this._count);
        },   
   });
});