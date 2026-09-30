const codeText = `#include <iostream>\n\nint main() {\n    std::cout << "Hello World, I'm Lizi (WhoosLizi)\\n";\n    return 0;\n}`;
                let i = 0;
                const speed = 25;
                
                function typeWriter() {
                    if (i < codeText.length) {
                        document.getElementById("typewriter-code").textContent += codeText.charAt(i);
                        i++;
                        setTimeout(typeWriter, speed);
                    } else {
                        document.querySelector('.cursor').style.animation = 'blink 1s infinite';
                        setTimeout(() => {
                            document.querySelector('.code-editor-card').style.display = 'none';
                            document.getElementById("terminal-output").classList.add('show-output');
                        }, 1000);
                    }
                }
                
                window.onload = typeWriter;
            


                document.getElementById('show-more-btn').addEventListener('click', function() {
                    const extra = document.getElementById('extra-projects');
                    if (extra.style.display === 'none') {
                        extra.style.display = 'grid';
                        this.innerHTML = 'Show Less<br><small style="font-family: \\\'Space Mono\\\', monospace; font-size: 0.8rem; font-weight: normal; text-transform: none;">(I warned you...)</small>';
                    } else {
                        extra.style.display = 'none';
                        this.innerHTML = 'Show More<br><small style="font-family: \\\'Space Mono\\\', monospace; font-size: 0.8rem; font-weight: normal; text-transform: none;">(Warning: Might contain highly questionable bs code)</small>';
                    }
                });