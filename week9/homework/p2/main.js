    const input = document.getElementById('typer');
    const logBox = document.getElementById('keyLog');

    input.addEventListener('keydown', (e) => {
      const p = document.createElement('p');
      p.className = 'row';
      if (e.key === 'Enter') {
        p.textContent = 'You pressed: Enter';
        p.classList.add('enter'); // ทำให้เป็นสีน้ำเงิน
      } else {
        p.textContent = `You pressed: ${e.key}`;
      }
      logBox.appendChild(p);
    });