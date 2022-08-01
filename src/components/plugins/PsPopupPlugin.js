import PsPopup from "./PsPopup.vue";
import {createApp} from 'vue'

const install = async (app) => {
    // dom container for mount the Toast.vue
    let container;
    // like 'app' just for Toast.vue
    let popupApp;
    // 'props' that Toast.vue required.

    const baseProps = {
        // define a function to close(unmount) the toast used for 
        // case 1: in Toast.vue "click toast appeared and close it"
        // case 2: call 'this.$closeToast()' to close the toast in anywhere outside Toast.vue
        close: (params) => {
            if (popupApp)
                popupApp.unmount(container);

            container = document.querySelector('#ToastPlug');
            if (container)
                document.body.removeChild(container);
        },

    };


    // show Toast
    const popup = async (msg, btnOk, btnCancel) => {
        if (typeof msg === 'string')
            msg = {msg};
        if (btnOk === undefined) btnOk = () => {
        };

        if (btnCancel === undefined) btnCancel = () => {
        };

        const props = {...baseProps, ...msg, btnOk, btnCancel}
        console.log('props:', JSON.stringify(props));

        // assume the toast(previous) was not closed, and try to close it.
        props.close();

        // create a dom container and mount th Toast.vue
        container = document.createElement('div');
        container.setAttribute('id', 'ToastPlug');
        document.body.appendChild(container);
        popupApp = createApp(PsPopup, props);
        popupApp.mount(container)

    }

    // set 'toast()' and 'close()' globally
    app.config.globalProperties.$popup = popup;
    app.config.globalProperties.$closePopup = baseProps.close;
}

export default install;