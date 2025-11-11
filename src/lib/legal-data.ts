export type LegalContentType = 'privacy' | 'terms';

export const legalContent = {
    privacy: {
        title: 'Privacy Policy',
        content: `
            <div class="legal-content">
                <p class="text-sm text-gray-600 mb-6">Effective Date: November 3, 2025</p>
                
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
                <p class="mb-2"><strong>Email:</strong> privacy@devilslab.io</p>
                <p class="mb-4"><strong>Address:</strong> DevilsLab, Digital Innovation Center</p>

                <p class="text-sm text-gray-600 mt-8">Last updated: November 3, 2025</p>
            </div>
        `
    },
    terms: {
        title: 'Terms of Service',
        content: `
            <div class="legal-content">
                <p class="text-sm text-gray-600 mb-6">Effective Date: November 3, 2025</p>
                
                <h3 class="text-xl font-bold mt-6 mb-3">1. Acceptance of Terms</h3>
                <p class="mb-4">By accessing or using the services provided by DevilsLab ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.</p>

                <h3 class="text-xl font-bold mt-6 mb-3">2. Description of Services</h3>
                <p class="mb-4">DevilsLab provides software development, AI integration, web development, and digital consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.</p>

                <h3 class="text-xl font-bold mt-6 mb-3">3. User Responsibilities</h3>
                <p class="mb-4">You agree to:</p>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li>Use our services only for lawful purposes and in accordance with these Terms</li>
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Not attempt to gain unauthorized access to our systems or networks</li>
                    <li>Not use our services to transmit harmful, offensive, or illegal content</li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-3">4. Intellectual Property</h3>
                <p class="mb-4">All content, features, and functionality of our services are owned by DevilsLab and are protected by international copyright, trademark, patent, and other intellectual property laws.</p>
                <p class="mb-4">You may not copy, modify, distribute, sell, or lease any part of our services without our express written permission.</p>

                <h3 class="text-xl font-bold mt-6 mb-3">5. Project Deliverables</h3>
                <p class="mb-4">For custom development projects:</p>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li>Ownership of deliverables transfers upon full payment</li>
                    <li>We retain the right to showcase completed work in our portfolio</li>
                    <li>Timeline estimates are approximate and subject to scope changes</li>
                    <li>Changes to project scope may result in additional fees</li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-3">6. Payment Terms</h3>
                <p class="mb-4">Payment terms will be outlined in individual project agreements. Late payments may result in suspension of services and additional fees.</p>

                <h3 class="text-xl font-bold mt-6 mb-3">7. Limitation of Liability</h3>
                <p class="mb-4">To the maximum extent permitted by law, DevilsLab shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>

                <h3 class="text-xl font-bold mt-6 mb-3">8. Indemnification</h3>
                <p class="mb-4">You agree to indemnify and hold DevilsLab harmless from any claims, losses, damages, liabilities, and expenses arising from your use of our services or violation of these Terms.</p>

                <h3 class="text-xl font-bold mt-6 mb-3">9. Termination</h3>
                <p class="mb-4">We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>

                <h3 class="text-xl font-bold mt-6 mb-3">10. Changes to Terms</h3>
                <p class="mb-4">We may update these Terms from time to time. Continued use of our services after changes constitutes acceptance of the updated Terms.</p>

                <h3 class="text-xl font-bold mt-6 mb-3">11. Governing Law</h3>
                <p class="mb-4">These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.</p>

                <h3 class="text-xl font-bold mt-6 mb-3">12. Contact Information</h3>
                <p class="mb-4">For questions about these Terms, please contact us at:</p>
                <p class="mb-2"><strong>Email:</strong> legal@devilslab.io</p>
                <p class="mb-4"><strong>Address:</strong> DevilsLab, Digital Innovation Center</p>

                <p class="text-sm text-gray-600 mt-8">Last updated: November 3, 2025</p>
            </div>
        `
    }
};
