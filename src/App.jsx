import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import './quillforms-custom-components';
registerCoreBlocks();

const App = () => {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Form
        formId="1"
        formObj={{
          blocks: [
            {
              name: "welcome-screen",
              id: "jg1401r",
              attributes: {
                label: "Formulario de despido injustificado",
                description: "Tomará menos de 5 minutos y te ayudaremos a solucionar tu caso",
                buttonText: 'Comenzar',
                attachment: { 
                  type: "image",
                  url:
                    "https://quillforms.com/wp-content/uploads/2022/01/4207-ai-1.jpeg"
                }
              }
            },
            {
              name: "multiple-choice",
              id: 'ya-te-despidieron',
              attributes: {
                label: "¿Ya te despidieron?",
                "choices": [{ 
                  "value":  "Si",
                  "label": "Si"
                },
                { 
                  "value":  "No, pero sé o creo que me van a despedir pronto",
                  "label": "No, pero sé o creo que me van a despedir pronto"
                },
                { 
                  "value":  "No, estoy buscando conocer mis derechos",
                  "label": "No, estoy buscando conocer mis derechos"
                }],  // Default:  [ { "value": "123e45z7o89b",	"label": "Choice 1" }]
                "verticalAlign": true, // Default : false
                "multiple": false, // Default : false,
                "max": false, // Default: false,
                "min": false, // Default: false
                required: true,
                
              }
            },
            {
              name: "sliderDinero",
              id: '12345',
              attributes: {
                label: "¿Cuánto te pagaban al mes?",
                min: 0,
                max: 30000,
                step: 500,
                prefix: "$",
                suffix: ' mxn',
                required: true
              }
            },
            {
              name: "sliderMeses2",
              id: '123456',
              attributes: {
                label: "¿Hace cuánto entraste a trabajar?",
                min: 0,
                max: 60,
                step: 1,
                suffix: ' meses',
                required: true
              }
            },
            {
              name: "multiple-choice",
              id: 'que-paso-al-momento-del-despido',
              attributes: {
                label: "¿Qué pasó al momento del despido?",
                "choices": [{ 
                  "value":  "No firmé ninguna renuncia ni ningún otro papel",
                  "label": "No firmé ninguna renuncia ni ningún otro papel"
                },
                { 
                  "value":  "Me hicieron una renuncia o papeles en blanco al incio de la relación",
                  "label": "Me hicieron una renuncia o papeles en blanco al incio de la relación"
                },
                { 
                  "value":  "Me hicieron firmar una renuncia o papeles en blanco al momento del despido",
                  "label": "Me hicieron firmar una renuncia o papeles en blanco al momento del despido"
                }],  // Default:  [ { "value": "123e45z7o89b",	"label": "Choice 1" }]
                "verticalAlign": true, // Default : false
                "multiple": false, // Default : false,
                "max": false, // Default: false,
                "min": false, // Default: false
              }
            },
            {
              name: "multiple-choice",
              id: 'por-que-te-estan-despidiendo',
              attributes: {
                label: "¿Por qué te están despidiendo?",
                "choices": [{ 
                  "value":  "No hubo ninguna razón",
                  "label": "No hubo ninguna razón"
                },
                { 
                  "value":  "Actas administrativas",
                  "label": "Actas administrativas"
                },
                { 
                  "value":  "4 faltas injustificadas en un mes, agresiones o violencia, daño a equipo de trabajo, ir tomado o drogado a trabajar, desobedecer al patrón, otras similares",
                  "label": "4 faltas injustificadas en un mes, agresiones o violencia, daño a equipo de trabajo, ir tomado o drogado a trabajar, desobedecer al patrón, otras similares"
                }],  // Default:  [ { "value": "123e45z7o89b",	"label": "Choice 1" }]
                "verticalAlign": true, // Default : false
                "multiple": false, // Default : false,
                "max": false, // Default: false,
                "min": false, // Default: false
              }
            },
            {
              name: "multiple-choice",
              id: 'que-pruebas-tienes',
              attributes: {
                label: "¿Que pruebas tienes o pudes conseguir?",
                description: 'Puedes seleccionar varias',
                "choices": [{ 
                  "value":  "Testigos de tu relación laboral",
                  "label": "Testigos de tu relación laboral"
                },
                { 
                  "value":  "Recibos de nomina, transferencias interbancarias o similares",
                  "label": "Recibos de nomina, transferencias interbancarias o similares"
                },
                { 
                  "value":  "Documentos que prueban que trabajaba ahí (contrato, carta de recomendación, constancia de trabajo)",
                  "label": "Documentos que prueban que trabajaba ahí (contrato, carta de recomendación, constancia de trabajo)"
                },
                { 
                  "value":  "Credenciales, equipo de trabajo o similares",
                  "label": "Credenciales, equipo de trabajo o similares"
                },
                { 
                  "value":  "Mensajes, Whatsapp o correos que prueban que trabaja ahí",
                  "label": "Mensajes, Whatsapp o correos que prueban que trabaja ahí"
                },
                { 
                  "value":  "No tengo ninguna prueba",
                  "label": "No tengo ninguna prueba"
                }],  // Default:  [ { "value": "123e45z7o89b",	"label": "Choice 1" }]
                "verticalAlign": true, // Default : false
                "multiple": true, // Default : false,
                "max": false, // Default: false,
                "min": false, // Default: false
                required: true
              },
            },
            {
              name: "short-text",
              id: 'nombre',
              attributes: {
                label: '¿Cómo te llamas?',
                setMaxCharacters: true, // Default: false
                maxCharacters: 50,
                required: true
              }
             },
             {
              name: "number",
              id: 'celular',
              attributes: {
                label: "¿Cúal es tu número de telefono?",
                setMaxCharacters: true, // Default: false
                maxCharacters: 10,
                setMin: true, // Default: false
                min: 0, // Default: 0
                setMax: true, // Default: false
                max: 9999999999, 
                required: true,
                description: 'Usaremos este número unicamente para poder enviarte la información de tu caso y no se compartira con terceros'
              }
            }
          ],
          settings: {
            animationDirection: "vertical",
            disableWheelSwiping: false,
            disableNavigationArrows: false,
            disableProgressBar: false
          },
          theme: {
            font: "Roboto",
            buttonsBgColor: "#9b51e0",
            logo: {
              src: ""
            },
            questionsColor: "#000",
            answersColor: "#0aa7c2",
            buttonsFontColor: "#fff",
            buttonsBorderRadius: 25,
            errorsFontColor: "#fff",
            errorsBgColor: "#f00",
            progressBarFillColor: "#000",
            progressBarBgColor: "#ccc"
          },
          messages: {
            'label.button.ok': 'Continuar',
            'label.hintText.enter': 'Presiona <strong>Enter ↵</strong>',
            'label.submitBtn': 'Finalizar',
            'label.errorAlert.required': "Necesitas rellenar este campo!",
            'label.errorAlert.maxCharacters': 'Maximos caracteres alcanzados!',
            'label.errorAlert.number' : 'Solo puedes usar números!',
            'block.shortText.placeholder': 'Introduce tu nombre',
            'block.number.placeholder' : 'Introduce tu número celular',
            'block.defaultThankYouScreen.label' : '<strong>Gracias por llenar el formulario</strong><br /> Acabas de recibir un mensaje de WhatsApp por parte de nuestros asesores al numero que nos dejaste'
          }
        }}
        onSubmit={(data, { completeForm, setIsSubmitting }) => {
          console.log(data);
          setTimeout(() => {
            setIsSubmitting(false);
            completeForm();
          }, 500);
        }}
      />
    </div>
  );
};

export default App;
