import React, { useState } from "react";
import "./AssessmentForm.css";
import Question from "../common/Question";

const competencies = {

  /*//Tomada de Decisão
  "Tomada de Decisão": [
    {
      id: 1,
      text: "Sua equipe está atrasada na entrega de um projeto importante. O que você faz?",
      options: [
        "Reúno a equipe para identificar os obstáculos e ajustar o cronograma.", points: 10,
        "Trabalho mais horas para compensar o atraso sozinho.",
        "Pressiono a equipe para acelerar a entrega, mesmo com possível perda de qualidade.",
        "Informo o cliente sobre o atraso e não faço ajustes no planejamento.",
      ],
    },
    {
      id: 2,
      text: "Você precisa escolher entre duas propostas: uma mais barata com riscos moderados e outra mais cara com baixo risco. Qual decisão toma?",
      options: [
        "Opto pela mais cara para evitar riscos.",
        "Analiso os riscos de ambas, consulto a equipe e escolho a mais estratégica.",
        "Escolho a proposta mais barata para economizar custos.",
        "Adio a decisão para ganhar mais tempo.",
      ],
    },
    {
      id: 3,
      text: "Um cliente importante pede uma solução fora do escopo do projeto. Como você reage?",
      options: [
        "Avalio o impacto e custo da solicitação antes de responder.",
        "Aceito a solicitação sem avaliar para agradar o cliente.",
        "Recuso imediatamente para manter o foco no escopo.",
        "Digo que vou verificar, mas não tomo nenhuma atitude.",
      ],
    },
    {
      id: 4,
      text: "Um problema inesperado interrompe um processo crucial. O que você faz primeiro?",
      options: [
        "Analiso rapidamente a causa do problema e tomo uma decisão para solucioná-lo.",
        "Espero que a situação se resolva sozinha.",
        "Informo a liderança e aguardo instruções.",
        "Tomo uma decisão imediata sem avaliar as consequências.",
      ],
    },
    {
      id: 5,
      text: "Dois membros da equipe estão em conflito, prejudicando o andamento do projeto. Como você age?",
      options: [
        "Chamo ambos para conversar e encontrar uma solução conjunta.",
        "Ignoro o conflito para não me envolver.",
        "Escolho o lado de quem considero mais competente.",
        "Afasto um dos membros da equipe sem ouvir as duas partes.",
      ],
    },
  ],

  //Comunicação eficaz

  "Comunicação eficaz": [
  {
    id: 1,
    text: "Um membro da equipe não entendeu uma instrução importante. Como você reage?",
    options: [
      "Repito a instrução de forma mais clara e confirmo se foi compreendida.",
      "Envio a instrução por e-mail e espero que ele leia com atenção.",
      "Peço para outro colega explicar.",
      "Sigo em frente e espero que ele descubra sozinho.",
    ],
  },
  {
    id: 2,
    text: "Durante uma reunião, alguém interrompe enquanto você fala. O que você faz?",
    options: [
      "Peço educadamente para terminar meu raciocínio antes de ouvir.",
      "Ignoro a interrupção e continuo falando.",
      "Fico em silêncio até a pessoa terminar.",
      "Interrompo de volta para manter o foco no que estou dizendo.",
    ],
  },
  {
    id: 3,
    text: "Um cliente está insatisfeito e levanta a voz. Como você lida com a situação?",
    options: [
      "Mantenho a calma, ouço atentamente e proponho soluções.",
      "Interrompo para justificar o erro.",
      "Peço para ele se acalmar antes de continuar.",
      "Encaminho o cliente para outro setor.",
    ],
  },
  {
    id: 4,
    text: "Ao apresentar um projeto, você percebe que a audiência parece confusa. O que faz?",
    options: [
      "Pergunto se há dúvidas e ajusto a explicação conforme necessário.",
      "Sigo a apresentação, pois o material está bem preparado.",
      "Acelero o ritmo para concluir mais rápido.",
      "Distribuo o material para leitura posterior.",
    ],
  },
  {
    id: 5,
    text: "Recebe um feedback negativo sobre sua comunicação. Como reage?",
    options: [
      "Agradeço o feedback e peço exemplos para melhorar.",
      "Justifico minhas ações, explicando meu ponto de vista.",
      "Ignoro, pois acredito que minha comunicação é adequada.",
      "Fico incomodado, mas não comento nada.",
    ],
  },
  ],

  //Inteligência emocional
  "Inteligência emocional": [
  {
    id: 1,
    text: "Um colega está visivelmente estressado com prazos. O que você faz?",
    options: [
      "Ofereço ajuda e pergunto como posso apoiar.",
      "Ignoro, pois cada um deve lidar com suas tarefas.",
      "Critico a falta de organização.",
      "Aconselho a procurar o gerente.",
    ],
  },
  {
    id: 2,
    text: "Você recebe um feedback negativo. Como reage?",
    options: [
      "Agradeço e busco entender como melhorar.",
      "Defendo meu ponto de vista imediatamente.",
      "Fico magoado e evito a pessoa.",
      "Ignoro o feedback.",
    ],
  },
  {
    id: 3,
    text: "Alguém da equipe comete um erro. Como você reage?",
    options: [
      "Converso calmamente e ajudo a corrigir.",
      "Critico publicamente para servir de exemplo.",
      "Corrijo o erro sem falar com a pessoa.",
      "Ignoro o erro para evitar confronto.",
    ],
  },
  {
    id: 4,
    text: "Você está sobrecarregado e irritado. O que faz?",
    options: [
      "Organizo as tarefas e peço ajuda se necessário.",
      "Reclamo com a equipe sobre a carga de trabalho.",
      "Desconto o estresse nos colegas.",
      "Trabalho sozinho até resolver.",
    ],
  },
  {
    id: 5,
    text: "Um colaborador está desmotivado. Como agir?",
    options: [
      "Converso para entender e motivar.",
      "Cobro mais resultados.",
      "Ignoro, pois é um problema pessoal.",
      "Transfiro as tarefas dele para outro.",
    ],
  },
],

//Visão estratégica
    "Visão estratégica": [
  {
    id: 1,
    text: "Sua empresa quer lançar um novo produto. Como você começa?",
    options: [
      "Faço uma pesquisa de mercado detalhada.",
      "Copio ideias de concorrentes.",
      "Lançamos rapidamente para testar.",
      "Espero o mercado se mover antes de agir.",
    ],
  },
  {
    id: 2,
    text: "Você percebe uma tendência de mercado. O que faz?",
    options: [
      "Avalio o impacto e adapto a estratégia.",
      "Ignoro, pois o foco atual já está definido.",
      "Adoto a tendência sem análise.",
      "Sugiro esperar mais dados.",
    ],
  },
  {
    id: 3,
    text: "A empresa precisa crescer, mas há poucos recursos. Como decide?",
    options: [
      "Priorizo projetos com maior retorno.",
      "Corto custos de qualquer área.",
      "Invisto em publicidade.",
      "Pauso projetos até ter mais recursos.",
    ],
  },
  {
    id: 4,
    text: "Um concorrente lança uma inovação. Qual a sua reação?",
    options: [
      "Estudo a inovação e analiso riscos/oportunidades.",
      "Copio a inovação rapidamente.",
      "Ignoro e sigo o plano atual.",
      "Critico a ideia publicamente.",
    ],
  },
  {
    id: 5,
    text: "O mercado entra em crise. Como reage?",
    options: [
      "Reavalio planos e busco oportunidades.",
      "Reduzo gastos drasticamente.",
      "Continuo normalmente.",
      "Suspendo projetos por tempo indefinido.",
    ],
  },
],

//Adaptabilidade
"Adaptabilidade": [
  {
    id: 1,
    text: "Uma mudança de liderança traz novas diretrizes. Como você reage?",
    options: [
      "Me adapto e ajusto a equipe.",
      "Reclamo das mudanças.",
      "Ignoro e sigo como antes.",
      "Espero a equipe se adaptar sozinha.",
    ],
  },
  {
    id: 2,
    text: "Uma ferramenta nova foi implementada. Qual sua postura?",
    options: [
      "Aprendo e incentivo o uso.",
      "Uso apenas o necessário.",
      "Critico a mudança.",
      "Continuo com métodos antigos.",
    ],
  },
  {
    id: 3,
    text: "Um cliente muda o projeto no meio do processo. Como reage?",
    options: [
      "Reavalio e ajusto o cronograma.",
      "Reclamo da alteração.",
      "Faço só o que já estava combinado.",
      "Adio a entrega.",
    ],
  },
  {
    id: 4,
    text: "Seu time precisa adotar uma nova metodologia de trabalho. O que faz?",
    options: [
      "Treino a equipe e aplico gradualmente.",
      "Obrigo a mudança imediata.",
      "Ignoro e mantenho o método antigo.",
      "Deixo a equipe decidir.",
    ],
  },
  {
    id: 5,
    text: "Um imprevisto cancela um projeto. Qual sua atitude?",
    options: [
      "Busco alternativas rapidamente.",
      "Fico desmotivado.",
      "Reclamo da situação.",
      "Espero a decisão da liderança.",
    ],
  },
],

//Gestão de Conflito
"Gestão de Conflitos": [
  {
    id: 1,
    text: "Dois membros da equipe discutem constantemente. Como age?",
    options: [
      "Facilito um diálogo para resolver.",
      "Repreendo ambos publicamente.",
      "Deixo que se resolvam.",
      "Afasto um deles.",
    ],
  },
  {
    id: 2,
    text: "Um cliente reclama de um erro. Qual sua resposta?",
    options: [
      "Ouço, peço desculpas e proponho solução.",
      "Justifico o erro.",
      "Ignoro a reclamação.",
      "Transfiro o problema a outro setor.",
    ],
  },
  {
    id: 3,
    text: "Alguém não aceita críticas. O que faz?",
    options: [
      "Explico com calma a importância do feedback.",
      "Evito dar feedback.",
      "Critico mais ainda.",
      "Ignoro a pessoa.",
    ],
  },
  {
    id: 4,
    text: "Uma decisão sua gerou insatisfação. Como reage?",
    options: [
      "Escuto opiniões e ajusto o necessário.",
      "Defendo minha decisão sem discussão.",
      "Ignoro os insatisfeitos.",
      "Mudo de ideia sem analisar.",
    ],
  },
  {
    id: 5,
    text: "Há conflitos entre departamentos. Como age?",
    options: [
      "Reúno os líderes para alinhar objetivos.",
      "Deixo que resolvam sozinhos.",
      "Imponho regras rígidas.",
      "Não interfere.",
    ],
  },
],

//Delegação Eficaz
"Delegação Eficaz": [
  {
    id: 1,
    text: "Precisa concluir várias tarefas importantes. O que faz?",
    options: [
      "Delego conforme habilidades.",
      "Faço tudo sozinho.",
      "Divido sem critério.",
      "Adio prazos.",
    ],
  },
  {
    id: 2,
    text: "Um colaborador recebe uma tarefa desafiadora. Como age?",
    options: [
      "Ofereço suporte e acompanho o progresso.",
      "Deixo ele resolver sozinho.",
      "Retiro a tarefa se houver dificuldade.",
      "Delego para outra pessoa.",
    ],
  },
  {
    id: 3,
    text: "Há um projeto grande com prazos curtos. Qual sua estratégia?",
    options: [
      "Divido responsabilidades com clareza.",
      "Assumo todas as tarefas críticas.",
      "Deixo a equipe decidir quem faz o quê.",
      "Espero a liderança interferir.",
    ],
  },
  {
    id: 4,
    text: "Um funcionário comete erros frequentes. O que faz?",
    options: [
      "Treino e acompanho suas atividades.",
      "Deixo de delegar tarefas a ele.",
      "Critico publicamente.",
      "Passo as tarefas para outra pessoa.",
    ],
  },
  {
    id: 5,
    text: "Um colaborador quer mais desafios. Como responde?",
    options: [
      "Delego tarefas complexas com orientação.",
      "Dou tarefas simples para garantir resultado.",
      "Não mudo sua carga de trabalho.",
      "Peço que ele busque desafios sozinho.",
    ],
  },
],

//Inspirar e motivar

"Inspirar e motivar": [
  {
    id: 1,
    text: "Sua equipe está desmotivada. O que faz?",
    options: [
      "Organizo uma reunião para entender os desafios e buscar soluções.",
      "Ignoro, pois acredito que a motivação vem de cada um.",
      "Peço para que os membros da equipe se esforcem mais.",
      "Tomo decisões mais rígidas para forçar resultados.",
    ],
  },
  {
    id: 2,
    text: "Um colaborador atinge uma meta desafiadora. Como reage?",
    options: [
      "Parabenizo publicamente e ofereço mais responsabilidades.",
      "Agradeço em particular, mas não faço muito alarde.",
      "Digo que deveria ter feito mais, pois ainda há espaço para melhorar.",
      "Não menciono nada, pois é apenas parte do trabalho.",
    ],
  },
  {
    id: 3,
    text: "Um membro da equipe está com dificuldades de entregar tarefas no prazo. O que faz?",
    options: [
      "Ofereço apoio e ajudo a reorganizar as prioridades.",
      "Reprimo o comportamento e aviso sobre as consequências.",
      "Ignoro o problema e espero que ele se resolva sozinho.",
      "Delego a tarefa a outro membro da equipe.",
    ],
  },
  {
    id: 4,
    text: "Você percebe que um colaborador tem potencial, mas não está comprometido. O que faz?",
    options: [
      "Conversa com ele para entender suas dificuldades e motiva-lo.",
      "Ignoro, pois acredito que todos devem ter sua própria motivação.",
      "Repreendo por não estar comprometido.",
      "Transfiro tarefas mais fáceis para ele.",
    ],
  },
  {
    id: 5,
    text: "Sua equipe está com baixa moral. Como age?",
    options: [
      "Organizo atividades para fortalecer o vínculo e a confiança.",
      "Reforço as regras e tento ser mais rígido.",
      "Evito interagir para não forçar a barra.",
      "Faço com que cada um se concentre mais no trabalho.",
    ],
  },
],

//Gestão do tempo
"Gestão do tempo": [
  {
    id: 1,
    text: "Você tem várias tarefas importantes para concluir. Como organiza seu tempo?",
    options: [
      "Prioritizo as tarefas mais urgentes e importantes.",
      "Faço uma lista de todas as tarefas e vou fazendo conforme me lembro.",
      "Peço ajuda para dividir as tarefas.",
      "Deixo para resolver tudo no último minuto.",
    ],
  },
  {
    id: 2,
    text: "Um imprevisto surge durante o seu dia de trabalho. O que faz?",
    options: [
      "Reavalio as prioridades e ajusto o planejamento.",
      "Deixo o imprevisto de lado e continuo com o que estava fazendo.",
      "Reclamo do ocorrido e tento fazer o que posso.",
      "Adio o imprevisto para depois.",
    ],
  },
  {
    id: 3,
    text: "Você tem uma reunião longa pela frente. Como se prepara?",
    options: [
      "Faço uma agenda clara e defino os objetivos da reunião.",
      "Simplesmente participo sem muita preparação.",
      "Faço uma revisão rápida antes, mas sem me aprofundar.",
      "Adio a reunião se possível, pois estou muito ocupado.",
    ],
  },
  {
    id: 4,
    text: "Você está com várias tarefas, mas uma demanda de última hora aparece. O que faz?",
    options: [
      "Avalio a urgência e reordeno as prioridades.",
      "Faço a nova tarefa imediatamente, deixando as outras de lado.",
      "Ignoro a demanda e continuo com o que já estava fazendo.",
      "Peço que outra pessoa resolva a nova demanda.",
    ],
  },
  {
    id: 5,
    text: "Você percebe que está ficando sem tempo para concluir suas tarefas. Como age?",
    options: [
      "Revejo meu planejamento, peço ajuda e ajusto o cronograma.",
      "Deixo algumas tarefas para depois e sigo tentando concluir o que posso.",
      "Fico nervoso e tento fazer tudo de uma vez.",
      "Adio o que posso e me concentro nas tarefas mais fáceis.",
    ],
  },
],

"Pensamento crítico": [
  {
    id: 1,
    text: "Você recebe uma proposta que parece boa à primeira vista, mas com algumas dúvidas. O que faz?",
    options: [
      "Pesquiso mais sobre a proposta e analiso todos os detalhes antes de tomar uma decisão.",
      "Aceito a proposta sem questionar, pois parece vantajosa.",
      "Peço a opinião de outras pessoas antes de decidir.",
      "Rejeito a proposta de imediato por achar que há algo errado.",
    ],
  },
  {
    id: 2,
    text: "Um problema inesperado surge em um projeto. Qual a sua abordagem?",
    options: [
      "Avalio a situação de forma lógica, identifico as causas e busco uma solução.",
      "Reajo de forma emocional, buscando a solução mais rápida.",
      "Ignoro o problema e espero que se resolva sozinho.",
      "Delego a responsabilidade para outra pessoa sem entender o contexto.",
    ],
  },
  {
    id: 3,
    text: "Ao analisar um relatório, você percebe que os números não parecem fazer sentido. O que faz?",
    options: [
      "Investigo as fontes dos dados e verifico possíveis erros ou inconsistências.",
      "Ignoro os números e sigo com a análise com base em outras informações.",
      "Aceito os números sem questionar e continuo o trabalho.",
      "Fico frustrado, mas deixo a análise para alguém mais experiente.",
    ],
  },
  {
    id: 4,
    text: "Você recebe uma nova tarefa com prazos apertados. Como decide por onde começar?",
    options: [
      "Analiso as prioridades, divido a tarefa em partes e começo pelas mais urgentes.",
      "Aceito a tarefa e começo sem planejar, tentando fazer o melhor possível.",
      "Peço ajuda para definir quais partes são mais importantes.",
      "Adio o início até ter mais tempo para pensar melhor sobre a tarefa.",
    ],
  },
  {
    id: 5,
    text: "Você percebe que uma solução que adotou no passado não está mais funcionando. Como reage?",
    options: [
      "Reavalio a situação, busco novas abordagens e ajusto a solução.",
      "Continuo com a mesma solução, esperando que ela funcione eventualmente.",
      "Admito que errei, mas não tento mais modificar nada.",
      "Procuro justificar a solução anterior sem considerar mudanças.",
    ],
  },
],
};*/

"Tomada de Decisão": [
  {
    id: 1,
    text: "Sua equipe está atrasada na entrega de um projeto importante. O que você faz?",
    options: [
      { text: "Reúno a equipe para identificar os obstáculos e ajustar o cronograma.", points: 10 }, // Melhor resposta: liderança colaborativa.
      { text: "Trabalho mais horas para compensar o atraso sozinho.", points: 5 }, // Resposta aceitável, mas individualista.
      { text: "Pressiono a equipe para acelerar a entrega, mesmo com possível perda de qualidade.", points: 3 }, // Foco no resultado, mas ignora qualidade e equipe.
      { text: "Informo o cliente sobre o atraso e não faço ajustes no planejamento.", points: 0 }, // Não resolve o problema.
    ],
  },
  {
    id: 2,
    text: "Você precisa escolher entre duas propostas: uma mais barata com riscos moderados e outra mais cara com baixo risco. Qual decisão toma?",
    options: [
      { text: "Opto pela mais cara para evitar riscos.", points: 7 }, // Decisão prudente, mas não necessariamente estratégica.
      { text: "Analiso os riscos de ambas, consulto a equipe e escolho a mais estratégica.", points: 10 }, // Melhor resposta: análise e consulta estratégica.
      { text: "Escolho a proposta mais barata para economizar custos.", points: 5 }, // Boa resposta, mas pode ignorar riscos importantes.
      { text: "Adio a decisão para ganhar mais tempo.", points: 2 }, // Evita agir, demonstra indecisão.
    ],
  },
  {
    id: 3,
    text: "Um cliente importante pede uma solução fora do escopo do projeto. Como você reage?",
    options: [
      { text: "Avalio o impacto e custo da solicitação antes de responder.", points: 10 }, // Melhor resposta: análise cuidadosa.
      { text: "Aceito a solicitação sem avaliar para agradar o cliente.", points: 3 }, // Demonstra falta de análise, mas atende ao cliente.
      { text: "Recuso imediatamente para manter o foco no escopo.", points: 5 }, // Boa resposta, mas poderia avaliar o impacto.
      { text: "Digo que vou verificar, mas não tomo nenhuma atitude.", points: 0 }, // Não resolve o problema.
    ],
  },
  {
    id: 4,
    text: "Um problema inesperado interrompe um processo crucial. O que você faz primeiro?",
    options: [
      { text: "Analiso rapidamente a causa do problema e tomo uma decisão para solucioná-lo.", points: 10 }, // Melhor resposta: ação e análise.
      { text: "Espero que a situação se resolva sozinha.", points: 0 }, // Passividade, não resolve o problema.
      { text: "Informo a liderança e aguardo instruções.", points: 5 }, // Resposta válida, mas sem iniciativa direta.
      { text: "Tomo uma decisão imediata sem avaliar as consequências.", points: 3 }, // Demonstra ação, mas sem análise.
    ],
  },
  {
    id: 5,
    text: "Dois membros da equipe estão em conflito, prejudicando o andamento do projeto. Como você age?",
    options: [
      { text: "Chamo ambos para conversar e encontrar uma solução conjunta.", points: 10 }, // Melhor resposta: promove resolução colaborativa.
      { text: "Ignoro o conflito para não me envolver.", points: 0 }, // Passividade, não resolve o problema.
      { text: "Escolho o lado de quem considero mais competente.", points: 3 }, // Pode gerar mais conflitos na equipe.
      { text: "Afasto um dos membros da equipe sem ouvir as duas partes.", points: 2 }, // Ação autoritária e sem base.
    ],
  },
],
};

const AssessmentForm = () => {
  const [currentCompetencyIndex, setCurrentCompetencyIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [category, setCategory] = useState(""); // Novo estado para a categoria

  const competenciesKeys = Object.keys(competencies);
  const currentCompetency = competenciesKeys[currentCompetencyIndex];
  const currentQuestions = competencies[currentCompetency];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers.push({
      competency: currentCompetency,
      questionId: currentQuestion.id,
      answer: answer.text,
      points: answer.points,
    });
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentCompetencyIndex < competenciesKeys.length - 1) {
      setCurrentCompetencyIndex(currentCompetencyIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      const totalScore = updatedAnswers.reduce((acc, curr) => acc + curr.points, 0);
      setFinalScore(totalScore);

      // Determinando a categoria com base na pontuação
      let finalCategory = "";
      if (totalScore >= 80) {
        finalCategory = "Líder Everest";
      } else if (totalScore >= 50) {
        finalCategory = "Líder Kilimanjaro";
      } else {
        finalCategory = "Líder Moco";
      }
      setCategory(finalCategory);

      setIsCompleted(true);
    }
  };

  const restartAssessment = () => {
    setCurrentCompetencyIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsCompleted(false);
    setFinalScore(0);
    setCategory("");
  };

  return (
    <div className="assessment-form">
      {!isCompleted ? (
        <>
          <h3>Competência: {currentCompetency}</h3>
          <Question
            question={currentQuestion.text}
            options={currentQuestion.options}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        <div className="results">
          <h2>Resultado Final</h2>
          <p>Sua pontuação total: {finalScore}</p>
          <p>Classificação: <strong>{category}</strong></p>
          <p>
            {category === "Líder Everest"
              ? "Parabéns! Você demonstrou competências de liderança extraordinárias."
              : category === "Líder Kilimanjaro"
              ? "Bom trabalho! Você possui uma boa base de liderança, mas pode melhorar."
              : "Nível inicial. Você Precisa desenvolver diversas competências."}
          </p>
          <button onClick={restartAssessment}>Ver relatorio completo e as areas a serem trabalhadas</button>
        </div>
      )}
    </div>
  );
};

export default AssessmentForm;