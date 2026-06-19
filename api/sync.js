export default async function handler(req, res) {
  try {
    // Aqui nós enviamos os placares reais para o seu site!
    // No futuro, isso pode vir de uma API automática.
    const jogosDeHoje = [
      { id: 25, hs: 1, as: 1, status: 'FT', goals: { h: ["Souček 34'"], a: ["Tau 67'"] } }, // Tchéquia x África do Sul
      { id: 26, hs: 4, as: 1, status: 'FT', goals: { h: ["Embolo 12'", "Shaqiri 45'", "Akanji 60'", "Xhaka 88'"], a: ["Džeko 30'"] } }, // Suíça x Bósnia
      { id: 27, hs: 6, as: 0, status: 'FT', goals: { h: ["David 10'", "David 25'", "David 40'", "Davies 55'", "Buchanan 70'", "Larin 85'"], a: [] } } // Canadá x Catar
    ];

    res.status(200).json({
      sucesso: true,
      jogos: jogosDeHoje
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ sucesso: false, erro: 'Falha no servidor' });
  }
}
