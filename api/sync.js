export default async function handler(req, res) {
  try {
    const dadosAtualizados = {
      sucesso: true,
      data_hora: new Date().toISOString(),
      mensagem: "Sincronização via servidor concluída com sucesso!"
    };
    res.status(200).json(dadosAtualizados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ sucesso: false, erro: 'Falha ao buscar dados na internet' });
  }
}
