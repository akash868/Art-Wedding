const express = require('express');
const db = require("../config/dbConfig");

// Add Portfolio Content
const addConentPortfolio = async (req, res) => { 
    const { content, content_type } = req.body;
  
    if (!content || !content_type) {
      return res.status(400).json({ error: 'Content and Content Type are required' });
    }
  
    const query = 'INSERT INTO content (content, content_type) VALUES (?, ?)';
    db.query(query, [content, content_type], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'Content saved successfully', contentId: result.insertId });
    });
  };
  
// Add Testimonials Content
const addTestimonials = async (req, res) => {      
    const { content, name, content_type } = req.body;
  
    if (!content || !name || !content_type) {
      return res.status(400).json({ error: 'Content, Name, and Content Type are required' });
    }
  
    const query = 'INSERT INTO content (content, name, content_type) VALUES (?, ?, ?)';
    db.query(query, [content, name, content_type], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'Content saved successfully', contentId: result.insertId });
    });
};
  
// Update Portfolio Content
const updatePortfolio = async (req, res) => {      
    const { content, content_type } = req.body;
  
    if (!content || !content_type) {
      return res.status(400).json({ error: 'Content and Content Type are required' });
    }
  
    const query = 'UPDATE content SET content = ? WHERE content_type = ?';
    db.query(query, [content, content_type], (err, result) => {
      if (err) {
        console.error('Error updating data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'No matching content found to update' });
      }
      res.status(200).json({ message: 'Content updated successfully' });
    });
};
  
// Update Testimonials Content
const updateTestimonials = async (req, res) => {      
    const { content, name, content_type } = req.body;
  
    if (!content || !name || !content_type) {
      return res.status(400).json({ error: 'Content, Name, and Content Type are required' });
    }
  
    const query = 'UPDATE content SET content = ?, name = ? WHERE content_type = ?';
    db.query(query, [content, name, content_type], (err, result) => {
      if (err) {
        console.error('Error updating data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'No matching content found to update' });
      }
      res.status(200).json({ message: 'Content updated successfully' });
    });
};
  
// Get Content Based on content_type
const getEditContent = async (req, res) => {       
    const { content_type } = req.body;
  
    if (!content_type) {
      return res.status(400).json({ error: 'Content Type is required' });
    }
  
    const query = 'SELECT * FROM content WHERE content_type = ?';
    db.query(query, [content_type], (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
  
      if (results.length === 0) {
        return res.status(404).json({ message: 'No content found for the given type' });
      }
  
      res.status(200).json(results);
    });
};

// Add Script content
const addOurWorkContent = async (req, res) => { 
    const { content, content_type } = req.body;
  
    if (!content || !content_type) {
      return res.status(400).json({ error: 'Content and Content Type are required' });
    }
  
    const query = 'INSERT INTO content (content, content_type) VALUES (?, ?)';
    db.query(query, [content, content_type], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'Content saved successfully', contentId: result.insertId });
    });
};

// Update Script Content
const updateOurWorkContent = async (req, res) => {      
    const { content, content_type } = req.body;
  
    if (!content || !content_type) {
      return res.status(400).json({ error: 'Content and Content Type are required' });
    }
  
    const query = 'UPDATE content SET content = ? WHERE content_type = ?';
    db.query(query, [content, content_type], (err, result) => {
      if (err) {
        console.error('Error updating data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'No matching content found to update' });
      }
      res.status(200).json({ message: 'Content updated successfully' });
    });
};

// Add Client Gallery content
const addClientGalleryContent = async (req, res) => { 
    const { content, content_type } = req.body;
  
    if (!content || !content_type) {
      return res.status(400).json({ error: 'Content and Content Type are required' });
    }
  
    const query = 'INSERT INTO content (content, content_type) VALUES (?, ?)';
    db.query(query, [content, content_type], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'Content saved successfully', contentId: result.insertId });
    });
};

// Update Client Gallery Content
const updateClientGalleryContent = async (req, res) => {      
    const { content, content_type } = req.body;
  
    if (!content || !content_type) {
      return res.status(400).json({ error: 'Content and Content Type are required' });
    }
  
    const query = 'UPDATE content SET content = ? WHERE content_type = ?';
    db.query(query, [content, content_type], (err, result) => {
      if (err) {
        console.error('Error updating data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'No matching content found to update' });
      }
      res.status(200).json({ message: 'Content updated successfully' });
    });
};

// Update Our Stories Content
const updateOurStoriesContent = async (req, res) => {      
    const { content, name, content_type } = req.body;
  
    if (!content || !name || !content_type) {
      return res.status(400).json({ error: 'Content, Name, and Content Type are required' });
    }
  
    const query = 'UPDATE content SET content = ?, name = ? WHERE content_type = ?';
    db.query(query, [content, name, content_type], (err, result) => {
      if (err) {
        console.error('Error updating data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'No matching content found to update' });
      }
      res.status(200).json({ message: 'Content updated successfully' });
    });
};

// Add Our Stories Content
const addOurStoriesContent = async (req, res) => {      
    const { content, name, content_type } = req.body;
  
    if (!content || !name || !content_type) {
      return res.status(400).json({ error: 'Content, Name, and Content Type are required' });
    }
  
    const query = 'INSERT INTO content (content, name, content_type) VALUES (?, ?, ?)';
    db.query(query, [content, name, content_type], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'Content saved successfully', contentId: result.insertId });
    });
};

// Add Other Service content
const addOtherServiceContent = async (req, res) => { 
    const { content, content_type } = req.body;
  
    if (!content || !content_type) {
      return res.status(400).json({ error: 'Content and Content Type are required' });
    }
  
    const query = 'INSERT INTO content (content, content_type) VALUES (?, ?)';
    db.query(query, [content, content_type], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'Content saved successfully', contentId: result.insertId });
    });
};

// Update Other Service Content
const updateOtherServiceContent = async (req, res) => {      
    const { content, content_type } = req.body;
  
    if (!content || !content_type) {
      return res.status(400).json({ error: 'Content and Content Type are required' });
    }
  
    const query = 'UPDATE content SET content = ? WHERE content_type = ?';
    db.query(query, [content, content_type], (err, result) => {
      if (err) {
        console.error('Error updating data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'No matching content found to update' });
      }
      res.status(200).json({ message: 'Content updated successfully' });
    });
};

// Add Other service with Logo Content
const addOtherServiceWithLogoContent = async (req, res) => {      
    const { content, name, content_type } = req.body;
  
    if (!content || !name || !content_type) {
      return res.status(400).json({ error: 'Content, Name, and Content Type are required' });
    }
  
    const query = 'INSERT INTO content (content, name, content_type) VALUES (?, ?, ?)';
    db.query(query, [content, name, content_type], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'Content saved successfully', contentId: result.insertId });
    });
};

// Update Other service with Logo Content
const updateOtherServiceWithLogoContent = async (req, res) => {      
    const { content, name, content_type } = req.body;
  
    if (!content || !name || !content_type) {
      return res.status(400).json({ error: 'Content, Name, and Content Type are required' });
    }
  
    const query = 'UPDATE content SET content = ?, name = ? WHERE content_type = ?';
    db.query(query, [content, name, content_type], (err, result) => {
      if (err) {
        console.error('Error updating data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'No matching content found to update' });
      }
      res.status(200).json({ message: 'Content updated successfully' });
    });
};

module.exports = {
    addConentPortfolio,
    getEditContent,
    addTestimonials,
    updatePortfolio,
    updateTestimonials,
    addOurWorkContent,
    updateOurWorkContent,
    addClientGalleryContent,
    updateClientGalleryContent,
    addOurStoriesContent,
    updateOurStoriesContent,
    addOtherServiceContent,
    updateOtherServiceContent,
    addOtherServiceWithLogoContent,
    updateOtherServiceWithLogoContent,
}