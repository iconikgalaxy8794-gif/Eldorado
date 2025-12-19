* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: relative;
}

.brand-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    padding: 15px 20px;
    box-shadow: 0 2px 20px rgba(255, 107, 53, 0.3);
    z-index: 1000;
    text-align: center;
    border-bottom: 2px solid #ff6b35;
}

.brand-logo {
    font-size: 1.8em;
    font-weight: 800;
    color: #ff6b35;
    letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
}

.container {
    width: 100%;
    max-width: 600px;
    position: relative;
    margin-top: 80px;
}

.step {
    display: none;
    animation: fadeIn 0.5s ease-in;
}

.step.active {
    display: block;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.content {
    background: #1a1a1a;
    border-radius: 20px;
    padding: 50px 40px;
    box-shadow: 0 20px 60px rgba(255, 107, 53, 0.4);
    text-align: center;
    position: relative;
    border: 3px solid #ff6b35;
}

.brand-badge {
    display: inline-block;
    background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
    color: #000000;
    padding: 8px 20px;
    border-radius: 25px;
    font-size: 0.9em;
    font-weight: 700;
    margin-bottom: 20px;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(255, 107, 53, 0.5);
}

.title {
    font-size: 2.5em;
    color: #ff6b35;
    margin-bottom: 15px;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(255, 107, 53, 0.3);
}

.subtitle {
    font-size: 1.2em;
    color: #cccccc;
    margin-bottom: 30px;
}

.btn {
    padding: 15px 40px;
    font-size: 1.1em;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
}

.btn-primary {
    background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
    color: #000000;
    font-weight: 700;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.6);
    background: linear-gradient(135deg, #ff8c42 0%, #ffa500 100%);
}

.btn-success {
    background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
    color: #000000;
    font-weight: 700;
}

.btn-success:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.6);
    background: linear-gradient(135deg, #ff8c42 0%, #ffa500 100%);
}

.textbox {
    width: 100%;
    min-height: 200px;
    padding: 20px;
    border: 2px solid #333333;
    border-radius: 15px;
    font-size: 1.1em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    resize: vertical;
    margin-bottom: 25px;
    transition: border-color 0.3s ease;
    background: #2d2d2d;
    color: #ffffff;
}

.textbox::placeholder {
    color: #666666;
}

.textbox:focus {
    outline: none;
    border-color: #ff6b35;
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.2);
}

.input-group {
    width: 100%;
    margin-bottom: 25px;
    text-align: left;
}

.input-label {
    display: block;
    font-size: 1em;
    font-weight: 600;
    color: #ff6b35;
    margin-bottom: 10px;
    text-align: center;
}

.input-field {
    width: 100%;
    padding: 18px 20px;
    border: 2px solid #333333;
    border-radius: 15px;
    font-size: 1.1em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: all 0.3s ease;
    text-align: center;
    background: #2d2d2d;
    color: #ffffff;
}

.input-field::placeholder {
    color: #666666;
}

.input-field:focus {
    outline: none;
    border-color: #ff6b35;
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.2);
    transform: translateY(-2px);
}

.success-message {
    padding: 20px;
}

.checkmark {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
    color: #000000;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 30px;
    animation: scaleIn 0.5s ease-out;
    box-shadow: 0 0 20px rgba(255, 107, 53, 0.6);
}

@keyframes scaleIn {
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
}

@media (max-width: 600px) {
    .brand-header {
        padding: 12px 15px;
    }
    
    .brand-logo {
        font-size: 1.4em;
    }
    
    .container {
        margin-top: 70px;
    }
    
    .content {
        padding: 30px 25px;
    }
    
    .title {
        font-size: 2em;
    }
    
    .subtitle {
        font-size: 1em;
    }
    
    .btn {
        padding: 12px 30px;
        font-size: 1em;
    }
    
    .brand-badge {
        font-size: 0.8em;
        padding: 6px 15px;
    }
}
