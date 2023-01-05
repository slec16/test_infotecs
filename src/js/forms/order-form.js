import ApiService  from "../services/api-service";
import {serializeForm} from "../sign";


const applicantForm = document.getElementById('order-form');

export class OrderForm {
    constructor(){
        this.formEl = document.getElementById('order-form');
        this.mastersSelect = this.formEl.elements.masterId;
        this.servicesSelect = this.formEl.elements.serviceId;
        
        this._init();
        this._bindEvents();
    }

    _init() {
        this._buildMastersSelect();
        this._buildServicesSelect();
    }

    _bindEvents(){
        function handleFormSubmit(){
            applicantForm.addEventListener('submit', async event => {
                event.preventDefault();
                const data = serializeForm(applicantForm);
                
             

                const sendArray = {
                    name: data.get('name'),
                    phone: data.get('phone'),
                    masterId: data.get('masterId'),
                    serviceId: data.get('serviceId'),
                    visitDate: data.get('visitDate')
                };
                console.log(sendArray);

                const response = await ApiService.createOrder(sendArray);
                console.log(response);
               
            })

        }

        handleFormSubmit();
    }


    async _buildMastersSelect() {
        const masters = await ApiService.getMasters();


        masters.forEach(master => {
            const option = document.createElement('option');
            option.value = master.id;
            option.textContent = `${master.surName} ${master.firstName}`;
            this.mastersSelect.add(option);
        });
    }

    async _buildServicesSelect() {
        const services = await ApiService.getServices();


        services.forEach(services => {
            const option = document.createElement('option');
            option.value = services.id;
            option.textContent = `${services.name}`;
            this.servicesSelect.add(option);
        });
    }

}