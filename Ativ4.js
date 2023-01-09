// // Crie cinco objetos JavaScript dentro de um Array contendo
// // nome(texto), idade(número), skills (array), ou seja um total de cincoalunos. Agora crie uma função que receba estes cinco objetos e
// // mais um parâmetro skill. Dependendo da skill enviada mostrar no
// // console.log(), quais alunos têm a skill enviada por parâmetro,
// // mostrar todo o objeto.
// // Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar
// // chamar a função enviando (alunos, “JavaScript”), precisa mostrar o
// // Pedro e qual mais se encaixa nessa skill.

let alunos = [
    {
        nome: "Paulo",
        idade: 22,
        skills: ["javascript", "css", , "c++"],
    },
    {
        nome: "Gabriel",
        idade: 23,
        skills: [, "java", "php", "typescript"],
    },
    {
        nome: "Henrique",
        idade: 21,
        skills: ["html", "css", "javascript"]
    },
    { 
        nome: "Julio", 
        idade: 22, 
        skills: ["java", "c", "phyton"],
    },
    {
        nome: "Enzo",
        idade: 20,
        skills: ["html", "css", "javascript", "c++"],
    },
  ];
  
    function localizaAluno() 
    {
        let encontraskill = prompt("Digite a skill: ").toLowerCase();
  
        if(!encontraskill)
        {
            return alert ('skill nao encontrada!')
        } 
  
        let result = alunos.filter
        ((alunos) => 
        {
            return alunos.skills.find((e, i, a) => 
            {
            if (e == encontraskill) 
            {
            return true;
            }
            }
            );
        }
        );
  
        console.log(result);
    }
  
localizaAluno();