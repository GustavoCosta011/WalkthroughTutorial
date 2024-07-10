sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
	"sap/ui/Device"
 ], (UIComponent, JSONModel, Device) => {
    "use strict";
 
    return UIComponent.extend("ui5.walkthrough.Component", {
        metadata : {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },

        init(){
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            const oData = {
                recipienteDeTexto : {
                name : ""
                }
            };
            const oModel = new JSONModel(oData);
            this.setModel(oModel);
            
            // set device model
			const oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

            // set i18n model
            const i18nModel = new ResourceModel({
                bundleName: "ui5.walkthrough.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");
            
            this.getRouter().initialize();
        }
    });
 });