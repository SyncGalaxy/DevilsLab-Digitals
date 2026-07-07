export type LegalContentType = 'privacy' | 'terms' | 'rnd';

export const legalContent = {
    privacy: {
        title: 'Privacy Policy',
        content: `
            <div class="legal-content">
                <p class="text-sm text-gray-600 mb-6">Effective Date: February 5, 2026</p>
                
                <h3 class="text-xl font-bold mt-6 mb-3">1. Information We Collect</h3>
                <p class="mb-4">We collect information you provide directly to us, including:</p>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, company name when you create an account or contact us.</li>
                    <li><strong>Usage Data:</strong> Information about how you interact with our services, including IP address, browser type, device information, and pages visited.</li>
                    <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to improve your experience.</li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-3">2. How We Use Your Information</h3>
                <p class="mb-4">We use the information we collect to:</p>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Send you technical notices, updates, security alerts, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect, investigate, and prevent fraudulent or illegal activity</li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-3">3. Information Sharing</h3>
                <p class="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-3">4. Data Security</h3>
                <p class="mb-4">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

                <h3 class="text-xl font-bold mt-6 mb-3">5. Your Rights</h3>
                <p class="mb-4">You have the right to:</p>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-3">6. Contact Us</h3>
                <p class="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
                <p class="mb-2"><strong>Email:</strong> contact@devilslab.co.in</p>
                <p class="mb-4"><strong>Address:</strong> devilsLab Digitals Pvt Ltd, Hyderabad, Telangana, India</p>

                <p class="text-sm text-gray-600 mt-8">Last updated: February 5, 2026</p>
            </div>
        `
    },
    terms: {
        title: 'Terms of Service',
        content: `
            <div class="legal-content">
                <p class="text-sm text-gray-600 mb-6">Effective Date: February 5, 2026</p>
                <p class="mb-4 font-semibold">devilsLab Digitals Pvt Ltd</p>
                <p class="mb-6 text-sm text-gray-600">These Terms of Service apply to: Surge System, Web Development, SaaS Development, Web3 Development, and all quotation-based custom services.</p>
                
                <h3 class="text-2xl font-bold mt-8 mb-4">1. Scope of Services</h3>
                <p class="mb-4">devilsLab Digitals Pvt Ltd ("devilsLab", "we", "us", "our") provides system-building and engineering services, including but not limited to:</p>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Surge System:</strong> A one-time lead-generation system installation comprising landing page development, Google and Meta ads setup, WhatsApp automation, and 30 days of post-launch support.</li>
                    <li><strong>Web Development:</strong> Static and dynamic website development services.</li>
                    <li><strong>SaaS Development:</strong> Custom software-as-a-service product development.</li>
                    <li><strong>Web3 Development:</strong> Blockchain integration and decentralized application development.</li>
                    <li><strong>Custom Engineering Services:</strong> Quotation-based project work as agreed in writing.</li>
                </ul>
                <p class="mb-4">All services are delivered strictly according to the scope defined in the written quotation, proposal, or service agreement provided to the client.</p>

                <h3 class="text-2xl font-bold mt-8 mb-4">2. Engagement Model</h3>
                <p class="mb-4">Services are provided on a project-based or retainer-based model, as specified in the service agreement.</p>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li>The <strong>Surge System</strong> is a one-time system installation service. It is not an ongoing management, retainer, or ad-management service.</li>
                    <li>Post-launch support for Surge System is limited to 30 days from the system go-live date.</li>
                    <li>Any ongoing support, maintenance, or ads management beyond the agreed scope requires a separate written agreement and additional fees.</li>
                </ul>

                <h3 class="text-2xl font-bold mt-8 mb-4">3. Pricing & Payments</h3>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li>All prices displayed on the website are indicative or fixed as explicitly stated. Final pricing is confirmed only after a strategy call and scope finalization.</li>
                    <li>Payments must be made according to the milestone schedule defined in the service agreement.</li>
                    <li>All payments are <strong>non-refundable</strong> once work has commenced on the agreed deliverables, unless explicitly stated otherwise in writing.</li>
                    <li>Failure to make payments as agreed may result in suspension of services and termination of the engagement.</li>
                </ul>

                <h3 class="text-2xl font-bold mt-8 mb-4">4. Client Responsibilities</h3>
                <p class="mb-4">The client agrees to:</p>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li>Provide accurate, complete, and timely business information, content, brand assets, and access credentials as required for service delivery.</li>
                    <li>Bear all third-party costs, including but not limited to: advertising spend (Google Ads, Meta Ads), hosting fees, domain registration, API licenses, cloud services, blockchain gas fees, and any other external platform or tool costs.</li>
                    <li>Review and approve deliverables promptly to avoid delays in project timelines.</li>
                    <li>Understand that delays caused by the client (late content, lack of approvals, unavailability for calls) may extend project timelines without penalty to devilsLab.</li>
                </ul>

                <h3 class="text-2xl font-bold mt-8 mb-4">5. Intellectual Property (General Services)</h3>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li>Upon receipt of full payment, the client owns the final deliverables specifically created for them under the service agreement.</li>
                    <li>This ownership transfer applies to general services (Surge System, Web Development, SaaS Development, Web3 Development). For Research & Development engagements, separate IP terms apply as defined in the R&D Policy.</li>
                    <li>devilsLab retains the right to reuse non-confidential learnings, frameworks, internal tooling, code libraries, and architectural patterns developed during the engagement.</li>
                    <li>devilsLab retains the right to showcase completed work in portfolios, case studies, and marketing materials unless restricted by a signed Non-Disclosure Agreement (NDA).</li>
                </ul>

                <h3 class="text-2xl font-bold mt-8 mb-4">6. No Guarantees Clause</h3>
                <p class="mb-4"><strong>devilsLab does NOT guarantee business outcomes.</strong></p>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li>We do not guarantee lead volume, lead quality, revenue, return on investment (ROI), or market success.</li>
                    <li>Performance and results depend on multiple external factors beyond our control, including but not limited to: market conditions, competition, offer quality, pricing strategy, audience targeting, ad spend, and the client's ability to execute and convert leads.</li>
                    <li>We guarantee only the delivery of the agreed system, scope, and deliverables as defined in the service agreement. We do not guarantee business outcomes or results.</li>
                </ul>

                <h3 class="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h3>
                <p class="mb-4">devilsLab Digitals Pvt Ltd shall not be held liable for:</p>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li>Indirect, incidental, consequential, or punitive damages of any kind.</li>
                    <li>Business downtime, lost revenue, lost opportunities, or opportunity costs.</li>
                    <li>Issues arising from third-party platforms or services, including but not limited to: Google Ads, Meta Ads, hosting providers, domain registrars, payment gateways, blockchain networks, or any external APIs or tools.</li>
                    <li>Changes in third-party platform policies, algorithms, pricing, or availability.</li>
                </ul>
                <p class="mb-4"><strong>Maximum Liability:</strong> In all cases, devilsLab's maximum liability is strictly limited to the total amount paid by the client for the specific service in question.</p>

                <h3 class="text-2xl font-bold mt-8 mb-4">8. Termination</h3>
                <p class="mb-4">Either party may terminate the engagement with written notice under the following conditions:</p>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li>Material breach of the service agreement by either party.</li>
                    <li>Non-payment of agreed fees by the client.</li>
                    <li>Failure to provide necessary information, content, or approvals by the client.</li>
                </ul>
                <p class="mb-4">Upon termination:</p>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li>All work completed up to the termination date must be paid for in full by the client.</li>
                    <li>devilsLab is under no obligation to deliver incomplete or in-progress work.</li>
                    <li>No refunds will be provided for work already completed and paid for.</li>
                </ul>

                <h3 class="text-2xl font-bold mt-8 mb-4">9. Governing Law</h3>
                <p class="mb-4">These Terms of Service are governed by and construed in accordance with the laws of India.</p>
                <p class="mb-4">Any disputes arising from or relating to these Terms or the services provided shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana, India.</p>

                <h3 class="text-2xl font-bold mt-8 mb-4">Contact Information</h3>
                <p class="mb-2"><strong>devilsLab Digitals Pvt Ltd</strong></p>
                <p class="mb-2"><strong>Email:</strong> contact@devilslab.co.in</p>
                <p class="mb-4"><strong>Registered Office:</strong> Hyderabad, Telangana, India</p>

                <p class="text-sm text-gray-600 mt-8">Last Updated: February 5, 2026</p>
            </div>
        `
    },
    rnd: {
        title: 'Research & Development (R&D) Policy',
        content: `
            <div class="legal-content">
                <p class="text-sm text-gray-600 mb-6">Effective Date: February 5, 2026</p>
                <p class="mb-4 font-semibold">devilsLab Digitals Pvt Ltd</p>
                <p class="mb-6 text-base text-gray-700">R&D engagements with devilsLab Digitals Pvt Ltd operate under special terms due to their exploratory, experimental, and high-risk nature. This policy is separate from and independent of our general Terms of Service.</p>
                
                <h3 class="text-2xl font-bold mt-8 mb-4">Engagement Options</h3>
                <p class="mb-6">Clients must choose one of the following engagement models before project initiation. This choice must be documented in writing and signed by both parties.</p>

                <div class="bg-gray-50 border-2 border-gray-700 p-6 mb-8">
                    <h4 class="text-xl font-bold mb-4">OPTION A — PAID R&D ENGAGEMENT</h4>
                    
                    <p class="mb-3 font-semibold">Fee Structure:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li>Client pays a fixed monthly R&D fee of ₹75,000/month (or as mutually agreed in writing).</li>
                        <li>Client bears 100% of all project expenses, including but not limited to: cloud infrastructure, API costs, third-party tools, hardware, licenses, research materials, and any other external costs.</li>
                    </ul>

                    <p class="mb-3 font-semibold">devilsLab Provides:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li>Technical research and feasibility analysis</li>
                        <li>Proof-of-concepts (PoCs) and exploratory prototypes</li>
                        <li>System architecture design and technical recommendations</li>
                        <li>Prototype development and testing</li>
                        <li>Comprehensive technical documentation</li>
                    </ul>

                    <p class="mb-3 font-semibold">Intellectual Property:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Upon full payment</strong>, 100% of the intellectual property (IP) created during the R&D engagement transfers to the client. This includes all code, designs, documentation, and technical outputs.</li>
                        <li>devilsLab retains the right to privately reference the work, learnings, and methodologies developed during the engagement, unless explicitly restricted by a signed Non-Disclosure Agreement (NDA).</li>
                        <li>devilsLab may not publicly disclose, share, or commercialize the client's IP without written permission.</li>
                    </ul>
                </div>

                <div class="bg-gray-50 border-2 border-gray-700 p-6 mb-8">
                    <h4 class="text-xl font-bold mb-4">OPTION B — IP / EQUITY SHARING MODEL</h4>
                    
                    <p class="mb-3 font-semibold">Fee Structure:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li>Instead of a full monthly R&D fee, the client grants <strong>20% ownership</strong> of the resulting product, system, or intellectual property to devilsLab Digitals Pvt Ltd.</li>
                        <li>Client bears 100% of all project expenses, including but not limited to: cloud infrastructure, API costs, third-party tools, hardware, licenses, research materials, and any other external costs.</li>
                    </ul>

                    <p class="mb-3 font-semibold">devilsLab Contributes:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li>Research effort and technical investigation</li>
                        <li>Engineering time and development labor</li>
                        <li>System architecture design</li>
                        <li>Prototype and proof-of-concept development</li>
                        <li>Technical documentation and knowledge transfer</li>
                    </ul>

                    <p class="mb-3 font-semibold">Intellectual Property Ownership:</p>
                    <p class="mb-2">Ownership of the resulting IP is shared as follows:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>80% Client</strong></li>
                        <li><strong>20% devilsLab Digitals Pvt Ltd</strong></li>
                    </ul>

                    <p class="mb-3 font-semibold">IP Agreement Required:</p>
                    <p class="mb-4">A separate, detailed Intellectual Property Agreement must be executed before work begins. This agreement must define:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li>Commercial use rights and revenue-sharing terms (if applicable)</li>
                        <li>Sublicensing rights and restrictions</li>
                        <li>Exit terms, buyout options, and equity transfer conditions</li>
                        <li>Decision-making authority for product development and commercialization</li>
                        <li>Dispute resolution mechanisms</li>
                    </ul>
                </div>

                <h3 class="text-2xl font-bold mt-8 mb-4">Important R&D Disclaimers</h3>
                <p class="mb-4 font-semibold">Clients acknowledge and agree to the following:</p>
                <ul class="list-disc pl-6 mb-6 space-y-3">
                    <li><strong>No Guaranteed Outcomes:</strong> R&D work is exploratory in nature. devilsLab does not guarantee that research will result in a working product, commercial success, or technical feasibility.</li>
                    <li><strong>Technical Feasibility ≠ Commercial Viability:</strong> A technically feasible solution does not guarantee market success, user adoption, profitability, or scalability.</li>
                    <li><strong>Timelines May Change:</strong> R&D timelines are estimates and may extend based on research complexity, technical challenges, or unforeseen obstacles. Timeline changes do not constitute a breach of contract.</li>
                    <li><strong>Failure is Not Breach:</strong> If an R&D idea, hypothesis, or approach fails to produce the intended results, this does not constitute a breach of contract or entitle the client to a refund.</li>
                    <li><strong>Scope May Evolve:</strong> R&D work may require scope adjustments, pivots, or additional phases based on findings. Such changes must be documented and agreed upon in writing.</li>
                </ul>

                <h3 class="text-2xl font-bold mt-8 mb-4">Exit & Continuation Terms</h3>
                <ul class="list-disc pl-6 mb-6 space-y-3">
                    <li><strong>Exit Rights:</strong> Either party (client or devilsLab) may exit the R&D engagement with 30 days' written notice.</li>
                    <li><strong>Upon Exit:</strong> All work completed up to the exit date must be paid for in full. IP ownership is determined based on the engagement model selected (Option A or Option B) and payments made.</li>
                    <li><strong>Continuation into Product Development:</strong> If the R&D phase successfully concludes and the client wishes to proceed to full product development, a new separate agreement must be executed. This new agreement will define scope, timelines, pricing, and deliverables for the product phase.</li>
                </ul>

                <h3 class="text-2xl font-bold mt-8 mb-4">Payment Terms</h3>
                <ul class="list-disc pl-6 mb-6 space-y-2">
                    <li>For Option A (Paid R&D), monthly fees must be paid in advance by the 1st of each month.</li>
                    <li>All project expenses (cloud, APIs, tools, licenses) must be paid directly by the client or reimbursed to devilsLab within 7 days of invoice.</li>
                    <li>Failure to make timely payments may result in suspension or termination of the R&D engagement.</li>
                </ul>

                <h3 class="text-2xl font-bold mt-8 mb-4">Confidentiality & NDA</h3>
                <p class="mb-4">Clients may request a Non-Disclosure Agreement (NDA) to protect sensitive business information, proprietary data, or trade secrets. If an NDA is executed:</p>
                <ul class="list-disc pl-6 mb-6 space-y-2">
                    <li>devilsLab will not publicly disclose, reference, or share the client's IP, technical approach, or business details.</li>
                    <li>devilsLab may still retain internal learnings, methodologies, and non-confidential technical knowledge.</li>
                </ul>

                <h3 class="text-2xl font-bold mt-8 mb-4">Governing Law</h3>
                <p class="mb-4">This R&D Policy is governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana, India.</p>

                <h3 class="text-2xl font-bold mt-8 mb-4">Contact Information</h3>
                <p class="mb-4">For R&D engagement inquiries or to discuss engagement models, please contact us at:</p>
                <p class="mb-2"><strong>devilsLab Digitals Pvt Ltd</strong></p>
                <p class="mb-2"><strong>Email:</strong> contact@devilslab.co.in</p>
                <p class="mb-4"><strong>Registered Office:</strong> Hyderabad, Telangana, India</p>

                <p class="text-sm text-gray-600 mt-8">Last Updated: February 5, 2026</p>
            </div>
        `
    }
};
