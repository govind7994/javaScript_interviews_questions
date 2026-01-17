const fs = require('fs');

// Read the file
const content = fs.readFileSync('question.js', 'utf8');

// Temporarily make it a module
const tempFile = `
module.exports = ${content.replace('const questions = ', '')};
`;

// Write temp file
fs.writeFileSync('temp.js', tempFile);

// Require it
const questions = require('./temp');

// Sort by level: easy, medium, advanced
const levelOrder = { easy: 1, medium: 2, advanced: 3 };
questions.sort((a, b) => levelOrder[a.level] - levelOrder[b.level]);

// Reassign ids
questions.forEach((q, index) => {
  q.id = index + 1;
});

// Convert back to string
const newQuestionsStr = questions.map(q => {
  return `  {
    id: ${q.id},
    level: '${q.level}',
    title: '${q.title.replace(/'/g, "\\'")}',
    shortDesc: '${q.shortDesc.replace(/'/g, "\\'")}',
    theory: '${q.theory.replace(/'/g, "\\'").replace(/\n/g, '\\n')}',
    logic: '${q.logic.replace(/'/g, "\\'").replace(/\n/g, '\\n')}',
    code: \`${q.code.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`,
    tip: '${q.tip.replace(/'/g, "\\'")}'
  }`;
}).join(',\n');

// Replace in content
const newContent = `const questions = [\n${newQuestionsStr}\n];`;

fs.writeFileSync('question.js', newContent, 'utf8');

// Clean up
fs.unlinkSync('temp.js');

console.log('Reordered successfully');