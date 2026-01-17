     let filteredQuestions = [...questions];

        function renderCards() {
            const grid = document.getElementById('cardsGrid');
            grid.innerHTML = filteredQuestions.map(q => `
                <div class="card" onclick="openModal(${q.id})">
                    <div class="card-header">
                        <span class="badge ${q.level}">${q.level}</span>
                        <span style="color: var(--text-muted); font-size: 0.7rem;">Q-${q.id}</span>
                    </div>
                    <h3>${q.title}</h3>
                    <p>${q.shortDesc}</p>
                    <div class="card-footer">
                        <span>LEARN LOGIC</span>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            `).join('');
        }

        function filterByLevel(level) {
            
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
                if(btn.innerText.toLowerCase().includes(level)) btn.classList.add('active');
            });

            if (level === 'all') {
                filteredQuestions = [...questions];
            } else {
                filteredQuestions = questions.filter(q => q.level === level);
            }
            renderCards();
        }

        function handleSearch() {
            const term = document.getElementById('searchInput').value.toLowerCase();
            filteredQuestions = questions.filter(q => 
                q.title.toLowerCase().includes(term) || 
                q.shortDesc.toLowerCase().includes(term)
            );
            renderCards();
        }

        function openModal(id) {
            const q = questions.find(item => item.id === id);
            const body = document.getElementById('modalBody');
            
            body.innerHTML = `
                <div style="margin-bottom: 20px;">
                    <span class="badge ${q.level}">${q.level} Level</span>
                </div>
                <h2 style="font-size: 2.2rem; margin-bottom: 30px;">${q.title}</h2>
                
                <div class="modal-grid">
                    <div>
                        <div class="content-block">
                            <div class="section-title" style="color: var(--primary)">
                                <i class="fas fa-graduation-cap"></i> Theoretical Concept
                            </div>
                            <p style="color: var(--text-muted)">${q.theory}</p>
                        </div>
                        
                        <div class="content-block">
                            <div class="section-title" style="color: var(--success)">
                                <i class="fas fa-cog"></i> Under the Hood Logic
                            </div>
                            <p style="color: var(--text-muted)">${q.logic}</p>
                        </div>

                        <div class="tip-box">
                            <strong>💡 Interview Pro Tip:</strong><br>
                            ${q.tip}
                        </div>
                    </div>

                    <div>
                        <div class="section-title" style="color: var(--warning)">
                            <i class="fas fa-code"></i> Logic Illustration
                        </div>
                        <div style="position: relative">
                            <pre><code>${q.code}</code></pre>
                            <button class="copy-btn" onclick="copyCode(this)">COPY</button>
                        </div>
                    </div>
                </div>
            `;
            document.getElementById('modalOverlay').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeModalDirectly() {
            document.getElementById('modalOverlay').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function closeModal(e) {
            if(e.target.id === 'modalOverlay') {
                closeModalDirectly();
            }
        }

        function copyCode(btn) {
            const code = btn.previousElementSibling.innerText;
            const el = document.createElement('textarea');
            el.value = code;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            btn.innerText = "COPIED!";
            setTimeout(() => btn.innerText = "COPY", 2000);
        }

        window.onload = function() {
            // Count questions by level
            const easyCount = questions.filter(q => q.level === 'easy').length;
            const mediumCount = questions.filter(q => q.level === 'medium').length;
            const advancedCount = questions.filter(q => q.level === 'advanced').length;
            const totalCount = easyCount + mediumCount + advancedCount;

            // Update stat pills
            const statPills = document.querySelectorAll('.stat-pill span');
            if (statPills.length >= 3) {
                statPills[0].textContent = `${easyCount} Easy`;
                statPills[1].textContent = `${mediumCount} Medium`;
                statPills[2].textContent = `${advancedCount} Advanced`;
            }

            // Update page title
            document.title = `GROWTHCODE | ${totalCount} Professional Interview Challenges`;

            renderCards();
        };