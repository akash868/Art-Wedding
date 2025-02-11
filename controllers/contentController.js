
const Content = require('../models/contentModel'); 

// Add Portfolio Content
const addConentPortfolio = (content_type) => async (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }

  try {
    const newContent = await Content.create({ content, content_type });
    res.status(201).json({ message: 'Content saved successfully', contentId: newContent.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
};

// Update Portfolio Content
const updatePortfolio = (content_type) => async (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }

  try {
    const [updatedRows] = await Content.update({ content }, { where: { content_type } });
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'No matching content found to update' });
    }
    res.status(200).json({ message: 'Content updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
};

// Add Testimonials Content
const addTestimonials = (content_type) => async (req, res) => {
  const { content, name } = req.body;
  if (!content || !name) {
    return res.status(400).json({ error: 'Content and Name are required' });
  }

  try {
    const newTestimonial = await Content.create({ content, name, content_type });
    res.status(201).json({ message: 'Testimonial saved successfully', contentId: newTestimonial.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
};

// Update Testimonials Content
const updateTestimonials = (content_type) => async (req, res) => {
  const { content, name } = req.body;
  if (!content || !name) {
    return res.status(400).json({ error: 'Content and Name are required' });
  }

  try {
    const [updatedRows] = await Content.update({ content, name }, { where: { content_type } });
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'No matching content found to update' });
    }
    res.status(200).json({ message: 'Content updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
};

// Get Content Based on content_type
const getEditContent = (content_type) => async (req, res) => {

  try {
    const contentData = await Content.findAll({ where: { content_type } });
    if (contentData.length === 0) {
      return res.status(404).json({ message: 'No content found for the given type' });
    }
    res.status(200).json(contentData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
};

module.exports = {
    addConentPortfolio,
    getEditContent,
    addTestimonials,
    updatePortfolio,
    updateTestimonials,
}