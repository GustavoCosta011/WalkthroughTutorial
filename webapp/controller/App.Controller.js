sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],(Controlador,MessageToast,JSONModel) => {
    "usar estrito";
    
    return Controlador.extend("ui5.walkthrough.controller.App",{
        onInit() {
            this._count = 0;
            const oData = {
               recipienteDeTexto : {
                  name : ""
               }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },
        onShowHello(){
            this._count++;                  
            MessageToast.show("OLOKO BICHO\nContador: " + this._count);
        },   
   });
});