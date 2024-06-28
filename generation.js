// Sample JSON data (simplified for illustration)
const figmaJson = {
    "document": {
        "children": [
            {
                "children": [
                    {
                        "children": [
                            {
                                "name": "Component 1",
                                "children": [
                                    {
                                        "name": "Section Title",
                                        "type": "TEXT",
                                        "characters": "Section Title 1"
                                    }
                                ]
                            },
                            {
                                "name": "Component 2",
                                "children": [
                                    {
                                        "name": "Section Title",
                                        "type": "TEXT",
                                        "characters": "Section Title 2"
                                    }
                                ]
                            },
                            {
                                "name": "Component 3",
                                "children": [
                                    {
                                        "name": "Section Title",
                                        "type": "TEXT",
                                        "characters": "Section Title 3"
                                    }
                                ]
                            },
                            {
                                "name": "Component 4",
                                "children": [
                                    {
                                        "name": "Section Title",
                                        "type": "TEXT",
                                        "characters": "Section Title 4"
                                    }
                                ]
                            },
                            {
                                "name": "Component 5",
                                "children": [
                                    {
                                        "name": "Section Title",
                                        "type": "TEXT",
                                        "characters": "Section Title 5"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

// Extract section titles from the JSON data
const sections = [];
figmaJson.document.children.forEach(page => {
    page.children.forEach(frame => {
        frame.children.forEach(component => {
            if (component.children) {
                component.children.forEach(element => {
                    if (element.type === "TEXT") {
                        sections.push(element.characters);
                    }
                });
            }
        });
    });
});

// Generate HTML code
let htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Figma Design</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .hidden { display: none; }
    </style>
</head>
<body class="bg-white">
    <div class="container mx-auto mt-10">
`;

// Add sections to the HTML
sections.forEach((section, index) => {
    const i = index + 1;
    htmlCode += `        <div class="bg-white shadow-lg rounded-lg p-4 mb-4">
            <div class="flex justify-between items-center cursor-pointer" onclick="toggleSection('section${i}')">
                <span class="text-gray-800 font-medium text-lg">${section}</span>
                <svg class="w-5 h-5 text-gray-600 transform transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
            </div>
            <div id="section${i}" class="hidden mt-4">
                <p class="text-gray-600">Content for ${section.toLowerCase()}.</p>
            </div>
        </div>
`;
});

// Close HTML tags
htmlCode += `    </div>
    <script>
        function toggleSection(sectionId) {
            const section = document.getElementById(sectionId);
            section.classList.toggle('hidden');
            const icon = section.previousElementSibling.querySelector('svg');
            icon.classList.toggle('rotate-180');
        }
    </script>
</body>
</html>
`;

// Output the generated HTML code
console.log(htmlCode);
