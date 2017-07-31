const hbsTemplate = (name) =>
`<!-- ${name}.hbs -->

<div class="${name}">${name} component</div>
`;

module.exports = hbsTemplate;
