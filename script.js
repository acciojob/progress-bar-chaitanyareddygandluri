
* {
    box-sizing: border-box;
}
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f6f7fb;
    font-family: Arial, sans-serif;
}
.container {
    text-align: center;
}
.progress-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 350px;
    margin-bottom: 30px;
}
.progress-container::before {
    content: "";
    background-color: #ddd;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    transform: translateY(-50%);
    z-index: -1;
}
.progress {
    background-color: #3498db;
    position: absolute;
    top: 50%;
    left: 0;
    height: 4px;
    width: 0%;
    transform: translateY(-50%);
    z-index: -1;
    transition: width 0.4s ease;
}
.circle {
    width: 35px;
    height: 35px;
    border: 3px solid #ddd;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
}
.circle.active {
    border-color: #3498db;
}
button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 8px 25px;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
}
button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
}
