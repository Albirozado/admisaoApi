const matematicaExames =  [
        {
        id: 1777024411,
        escola: "uem",
        nome: "matematica",
        variante: "",
        ano: 2004,
        baixar: "https://firebasestorage.googleapis.com/v0/b/examesproject.appspot.com/o/Universidade%2FUEM%2FMatematica%2FUEM-Matematica-2004.pdf?alt=media&token=73c9c1d2-d975-493a-8ee5-f5e627030130"
        },
    {
        id: 8953564598,
        escola: "uem",
        nome: "matematica",
        variante: "I",
        ano: 2005,
        baixar: "https://firebasestorage.googleapis.com/v0/b/examesproject.appspot.com/o/Universidade%2FUEM%2FMatematica%2FUEM-Matematica-2005.pdf?alt=media&token=55ab8585-c868-4843-8c1e-b1a3dc559fa5"
      },
      {
        id: 8762727540,
        escola: "uem",
        nome: "matematica",
        variante: "",
        ano: 2007,
        baixar: "https://firebasestorage.googleapis.com/v0/b/examesproject.appspot.com/o/Universidade%2FUEM%2FMatematica%2FUEM-Matematica-2007.pdf?alt=media&token=168478bd-4aae-4ed5-8f7d-896654e0f533"
      },
      {
        id: 8256056372,
        escola: "uem",
        nome: "matematica",
        variante: "",
        ano: 2008,
        baixar: "https://firebasestorage.googleapis.com/v0/b/examesproject.appspot.com/o/Universidade%2FUEM%2FMatematica%2FUEM-Matematica-2008.pdf?alt=media&token=191a2ab6-eff5-4e5b-92cc-04fad5d6e463"
      },
      {
        id: 3923608394,
        escola: "uem",
        nome: "matematica",
        variante: "",
        ano: 2009,
        baixar: "https://firebasestorage.googleapis.com/v0/b/examesproject.appspot.com/o/Universidade%2FUEM%2FMatematica%2FUEM-Matematica-2009.pdf?alt=media&token=9fea0cc9-6a88-4163-b57d-8ecb4a03d37e"
      },
      {
        id: 5928651010,
        escola: "uem",
        nome: "matematica",
        variante: "",
        ano: 2010,
        baixar: "https://firebasestorage.googleapis.com/v0/b/examesproject.appspot.com/o/Universidade%2FUEM%2FMatematica%2FUEM-Matematica-2010.pdf?alt=media&token=0ea4c37c-5047-4989-8f9f-a3532a4a9d4f"
      },
      {
        id: 3137714132,
        escola: "uem",
        nome: "matematica",
        variante: "",
        ano: 2005,
        baixar: "https://firebasestorage.googleapis.com/v0/b/examesproject.appspot.com/o/Universidade%2FUEM%2FMatematica%2FUEM-Matematica-2011.pdf?alt=media&token=0dc26117-b225-4cb9-8f42-ca0111e48726"
      },
      {
        id: 4092378248,
        escola: "uem",
        nome: "matematica",
        variante: "",
        ano: 2013,
        baixar: "https://firebasestorage.googleapis.com/v0/b/examesproject.appspot.com/o/Universidade%2FUEM%2FMatematica%2FUEM-Matematica-2013.pdf?alt=media&token=6a476e52-539a-4213-8837-efbf07d28103"
      },
      {
        id: 1486262929,
        escola: "uem",
        nome: "matematica",
        variante: "",
        ano: 2014,
        baixar: ""
      },
      {
        id: 1934524142,
        escola: "uem",
        nome: "matematica",
        variante: "",
        ano: 2016,
        baixar: "https://firebasestorage.googleapis.com/v0/b/examesproject.appspot.com/o/Universidade%2FUEM%2FMatematica%2FUEM-Matematica-2016.pdf?alt=media&token=768cfe2c-15ba-46b9-b3b7-e552d4b11287"
      },

      {
        id: 8304607417,
        escola: "uem",
        nome: "matematica",
        variante: "I",
        ano: 2017,
        baixar: "https://firebasestorage.googleapis.com/v0/b/examesproject.appspot.com/o/Universidade%2FUEM%2FMatematica%2FUEM-Matematica-2017.pdf?alt=media&token=e1b9ee68-4601-479b-8660-f7148db6707f"
      },
      {
        id: 1168711087,
        escola: "uem",
        nome: "matematica",
        variante: "",
        ano: 2018,
        baixar: "https://firebasestorage.googleapis.com/v0/b/examesproject.appspot.com/o/Universidade%2FUEM%2FMatematica%2FUEM-Matematica-2018.pdf?alt=media&token=4dbad40b-589e-450f-a9d2-a262184f3137"
      },
      {
        id: 3735419857,
        escola: "uem",
        nome: "matematica",
        variante: "",
        ano: 2019,
        baixar: "https://firebasestorage.googleapis.com/v0/b/examesproject.appspot.com/o/Universidade%2FUEM%2FMatematica%2FUEM-Matematica-2019.pdf?alt=media&token=72166862-5646-4cb8-8e13-ddfa73ff88f4"
      },
      {
        id: 1034486507,
        escola: "uem",
        nome: "matematica",
        variante: "",
        ano: 2020,
        baixar: "https://firebasestorage.googleapis.com/v0/b/examesproject.appspot.com/o/Universidade%2FUEM%2FMatematica%2FUEM-Matematica-2020.pdf?alt=media&token=ca50d3c8-bb7d-4510-9efc-7844212478f7"
      },
      

    
  
  ];
    
    export const getmatematicaExamesById = (req, res) => {
      const userId = parseInt(req.params.id);
      const user = matematicaExames.find((user) => user.id === userId);
    
      if (user) {
        res.send(user);
      } else {
        res.status(404).send("Usuário não encontrado");
      }
    };
  
    export const matematicaExaUEM = (req, res) =>{
      res.send(matematicaExames)
  
    }
      
  