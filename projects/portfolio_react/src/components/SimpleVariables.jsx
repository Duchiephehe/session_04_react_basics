function SimpleVariables() {
    // 1. Thông tin cá nhân
    const ten = "Bùi Đức Hiệp";
    const tuoi = 21;
    const queQuan = "Hà Nội";
    
    // 2. Chào theo giờ
    const currentHour = new Date().getHours();
    let loiChao = "";
    if (currentHour < 12) {
        loiChao = "Chào buổi sáng 🌅";
    } else if (currentHour < 18) {
        loiChao = "Chào buổi chiều ☀️";
    } else {
        loiChao = "Chào buổi tối 🌙";
    }
    
    // 3. Tính BMI
    const canNang = 56; 
    const chieuCao = 1.76; 
    const bmi = canNang / (chieuCao * chieuCao);

    return (
        <div style={{ padding: "20px", border: "2px solid #2ecc71", margin: "20px 0", borderRadius: "8px" }}>
            <h2 style={{ color: "#2ecc71" }}>Kết quả Bài 2.1: Simple Variables</h2>
            
            <h3>1. Thông tin cá nhân</h3>
            <ul>
                <li>Họ tên: <strong>{ten}</strong></li>
                <li>Tuổi: <strong>{tuoi}</strong></li>
                <li>Quê quán: <strong>{queQuan}</strong></li>
            </ul>

            <h3>2. Lời chào hiện tại</h3>
            <p>{loiChao}</p>
            <p>Bây giờ là: <strong>{new Date().toLocaleTimeString()}</strong></p>

            <h3>3. Chỉ số BMI</h3>
            <p>Cân nặng: {canNang} kg</p>
            <p>Chiều cao: {chieuCao} m</p>
            <p>BMI của bạn: <strong>{bmi.toFixed(2)}</strong></p>
        </div>
    );
}

export default SimpleVariables;
