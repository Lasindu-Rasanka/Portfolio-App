from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # Add this line
from flask import Flask, request, jsonify

app = Flask(__name__)

# Predefined responses for the chatbot
RESPONSES = {
    "hello": "Hello there! How can I help you today?",
    "services": "I offer Web Development, UI/UX Design, and AI Integration services.",
    "portfolio": "You can explore my work by clicking the 'Explore My Work' button on my portfolio.",
    "contact": "Feel free to reach out via the contact section or social media links in the footer.",
    "default": "I'm sorry, I didn't understand that. Could you rephrase or ask about my services, portfolio, or contact info?"
}

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    message = data.get('message', '').lower()
    
    # Simple keyword matching
    response = RESPONSES['default']
    for key in RESPONSES:
        if key in message:
            response = RESPONSES[key]
            break
    
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)