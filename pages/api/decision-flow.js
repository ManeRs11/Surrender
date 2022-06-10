
export default function handler(req, res) {
    let decisionFlow = {
        pregunta: 'Estas pensando en rentirte',
        si: {
            pregunta: '¿Por Que?',
            opcion_uno: 'Es muy dificil',
            opcion_dos: 'No me gusta',
            uno: {
                pregunta: '¿El desafio vale la recompensa?',
                si: {
                    resultado: 'Continua'
                },
                no: {
                    resultado: 'Rindete'
                }
            },
            dos: {
                pregunta: '¿Puedes hacer algo para que sea mas agradable?',
                si: {
                    pregunta: '¿Vale la pena el esfuerzo para hacerlo mas agradable?',
                    si: {
                        resultado: 'Continua'
                    },
                    no: {
                        resultado: 'Rindete'
                    }
                },
                no: {
                    resultado: 'Rindete'
                }
            }
        },
        no: {
            resultado: 'Continua'
        }
    }
    res.status(200).json(decisionFlow)
  }
  