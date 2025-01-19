const Report = require('../models/report'); // Importa o modelo Report

// Criar um novo relatório
const createReport = async (req, res) => {
  try {
    const { userId, name, email, category, score } = req.body;

    // Validação básica
    if (!userId || !name || !email || !category || !score) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const report = new Report({
      userId,
      name,
      email,
      category,
      score,
    });

    await report.save();
    return res.status(201).json({
      success: true,
      message: 'Relatório criado com sucesso',
      report,
    });
  } catch (error) {
    console.error('Erro ao criar o relatório:', error.message);
    return res.status(500).json({ error: 'Erro ao criar o relatório' });
  }
};

// Listar relatórios de um usuário
const getUserReports = async (req, res) => {
  try {
    const { userId } = req.params;

    const reports = await Report.find({ userId });
    if (!reports.length) {
      return res.status(404).json({ error: 'Nenhum relatório encontrado para este usuário.' });
    }

    return res.status(200).json({ reports });
  } catch (error) {
    console.error('Erro ao buscar relatórios:', error.message);
    return res.status(500).json({ error: 'Erro ao buscar relatórios.' });
  }
};

// Atualizar relatório por ID
const updateReport = async (req, res) => {
  try {
    const { reportId } = req.params;
    const { category, score } = req.body;

    const report = await Report.findByIdAndUpdate(
      reportId,
      { category, score, updatedAt: Date.now() },
      { new: true }
    );

    if (!report) {
      return res.status(404).json({ error: 'Relatório não encontrado.' });
    }

    return res.status(200).json({
      success: true,
      message: 'Relatório atualizado com sucesso.',
      report,
    });
  } catch (error) {
    console.error('Erro ao atualizar o relatório:', error.message);
    return res.status(500).json({ error: 'Erro ao atualizar o relatório.' });
  }
};

// Baixar relatório como PDF
const downloadReport = async (req, res) => {
  try {
    const { reportId } = req.params;

    const report = await Report.findById(reportId);
    if (!report) {
      return res.status(404).json({ error: 'Relatório não encontrado.' });
    }

    // Geração fictícia de PDF (ajuste conforme sua biblioteca de geração de PDFs)
    res.setHeader('Content-Disposition', `attachment; filename=report-${reportId}.pdf`);
    res.send(`PDF de exemplo para o relatório: ${report.name}`);
  } catch (error) {
    console.error('Erro ao baixar o relatório:', error.message);
    return res.status(500).json({ error: 'Erro ao baixar o relatório.' });
  }
};

module.exports = {
  createReport,
  getUserReports,
  updateReport,
  downloadReport,
};
