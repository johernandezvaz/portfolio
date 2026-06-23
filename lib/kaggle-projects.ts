export interface KaggleProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  kaggleUrl: string;
  notebookFile: string;
  date: string;
}

export const kaggleProjects: KaggleProject[] = [
  {
    id: "reconocimiento-digitos",
    title: "Reconocimiento de Dígitos",
    description: "Modelo de Deep Learning para el reconocimiento de dígitos escritos a mano usando una Red Neuronal Convolucional (CNN).",
    tags: ["PyTorch", "CNN", "Computer Vision", "Pandas"],
    kaggleUrl: "https://www.kaggle.com/code/maikua/reconocimiento-digitos-jos-hern-ndez",
    notebookFile: "reconocimiento-digitos-jos-hern-ndez.html",
    date: "2024-02"
  },
  {
    id: "felicidad-mundial",
    title: "Felicidad a Nivel Mundial",
    description: "Análisis exploratorio de datos (EDA) para descubrir los principales factores que contribuyen a la felicidad global.",
    tags: ["Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
    kaggleUrl: "https://www.kaggle.com/code/maikua/felicidad-a-nivel-mundial-jos-hern-ndez",
    notebookFile: "felicidad-a-nivel-mundial-jos-hern-ndez.html",
    date: "2024-03"
  },
  {
    id: "desempeno-alumnos",
    title: "Desempeño de Alumnos",
    description: "Análisis predictivo para determinar qué variables influyen más en las calificaciones de los estudiantes.",
    tags: ["Scikit-learn", "Machine Learning", "Regression", "Pandas"],
    kaggleUrl: "https://www.kaggle.com/code/maikua/desempe-o-alumnos-jos-hern-ndez",
    notebookFile: "desempe-o-alumnos-jos-hern-ndez.html",
    date: "2024-04"
  },
  {
    id: "prediccion-obesidad",
    title: "Predicción de Obesidad",
    description: "Clasificación de niveles de obesidad basada en hábitos alimenticios y condición física usando modelos de Machine Learning.",
    tags: ["Classification", "Random Forest", "Scikit-learn", "EDA"],
    kaggleUrl: "https://www.kaggle.com/code/maikua/predicci-n-obesidad-jos-hern-ndez",
    notebookFile: "predicci-n-obesidad-jos-hern-ndez.html",
    date: "2024-05"
  },
  {
    id: "iris-flower",
    title: "Iris Flower Dataset — Starter Project",
    description: "Proyecto introductorio utilizando el clásico dataset de Iris para tareas de clasificación básica.",
    tags: ["Scikit-learn", "KNN", "Data Visualization", "Starter"],
    kaggleUrl: "https://www.kaggle.com/code/maikua/starter-project-iris-flower-dataset",
    notebookFile: "starter-project-iris-flower-dataset.html",
    date: "2023-10"
  }
];
