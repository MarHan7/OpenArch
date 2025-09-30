import React from 'react';
import styles from './Team.module.css'

const Team = ({ projectData }) => {

  const LinkedInLink = ({ children, profile }) => (
    <a 
      href={`https://linkedin.com/in/${profile}`} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ textDecoration: 'underline', color: 'inherit' }}
    >
      {children}
    </a>
  );

  return (
    <div className={styles.projectDisplay}>
      <h2 className={styles.pageTitle}>Community</h2>
      
      <h3>Scientific committee</h3>
      <p>
        The scientific committee, composed of the project partners and members of the associated research laboratories, is responsible for selecting the projects to be included in the Atlas. This ensures the <strong>maturity and consistency</strong> of the editorial decisions for future entries within a sustainable and replicable framework. It has been agreed that the committee will meet at least <strong>four times a year</strong> to define research directions, select case studies, and validate content. External scientific experts, including international ones, will be consulted as needed when specific questions require additional expertise. The committee's activities will be documented in an <strong>annual report</strong>, including the list of members, number of meetings held, and the list of projects reviewed.
      </p>
      
      <ul>
        <li><LinkedInLink profile="mouloud-behloul-94704650">Mouloud Behloul</LinkedInLink> - Engineer and Director of Innovation and Sustainable Construction at Lafarge Ciment France.</li>
        <li> <LinkedInLink profile="guillaume-habert-05940b13b">Pr. Dr.Guillaume Habert</LinkedInLink> - Full Professor of Sustainable Construction at ETH Zurich.</li>
        <li><LinkedInLink profile="emilie-hergott">Emilie Hergott</LinkedInLink> - Architect (DPLG) and engineer, Director of Engineering at AREP, and member of the foresight group for the RBR-T Sustainable Building Plan.</li>
        <li><LinkedInLink profile="veronique-patteeuw-b3826929b">Dr.Véronique Patteeuw</LinkedInLink> - Architect-engineer, Senior Lecturer at ENSAP Lille, Visiting Professor at EPFL Lausanne and KU Leuven, Associate Professor and Lecturer at ENSAPL, and Co-curator of the 10th edition of the International Architecture Biennale Rotterdam.</li>
        <li><LinkedInLink profile="klaas-de-rycke-54369a86">Dr.Klaas De Rycke</LinkedInLink> - Partner and COO at Bollinger + Grohmann, Associate Professor at The Bartlett (UCL), Associate professor and researcher, and member of LéaV.</li>
        <li><LinkedInLink profile="susanne-stacher-89238157">Pr. Dr.Susanne Stacher</LinkedInLink> - Architect, researcher, and HDR Professor at ENSA Versailles, and member of LéAV.</li>
      </ul>
      <h3>Strategic committee</h3>
      <p>
        The establishment of a strategic committee supports <strong>decision-making</strong> and offers critical perspective on the project's overall strategy—its implementation, risks, and opportunities. As an <strong>advisory body</strong>, distinct from the scientific committee, its mission is to assist the project team in reflecting on and validating the project's development strategy. The members of the strategic committee meet to provide <strong>constructive critique</strong> while offering independent and committed support. Each meeting ensures that the strategy is being implemented with <strong>diligence and rigor</strong>. Composed of fully independent individuals with complementary profiles, the strategic committee meets every <strong>six months</strong> for a half-day session (no longer than three hours). One of the keys to the committee's effectiveness is the <strong>complementarity and compatibility</strong> among its members, and in particular, with the personality and leadership style of the project director.
      </p>

      <p><strong>Four points of the legal framework:</strong></p>
      <ul>
        <li>Formalization of each member's appointment through the signing of the strategic committee charter.</li>
        <li><strong>Absolute confidentiality</strong>.</li>
        <li><strong>Strictly advisory role</strong>.</li>
        <li><strong>Diligence in providing guidance</strong>.</li>
      </ul>

      <h2>Research laboratories</h2>

      <h3>Chair of Sustainable Construction – ETH Zurich</h3>
      <p>
        The Chair of Sustainable Construction at ETH Zurich, a member of the scientific committee, is responsible for <strong>validating the protocol and carbon analyses</strong> of the case studies, following its previous work analyzing the 33 projects featured in <em>L'Empreinte d'un habitat</em>. The Chair brings together a group of scientists, engineers, and architects committed to <strong>embedding sustainability</strong> across all disciplines involved in the built environment. Its objective is to identify the <strong>key parameters influencing the environmental impacts</strong> of buildings at international, national, and regional scales, in order to implement sustainable practices throughout the development of innovative strategies tailored to each stakeholder. This interdisciplinary work encompasses <strong>Life Cycle Assessment (LCA)</strong>, urban metabolism, and materials science.
      </p>

      <ul>
        <li><LinkedInLink profile="hallaham">Hager Al Laham</LinkedInLink> - Assistante de recherche, Integrated design expert, responsable implémentation et révision normes et standards énergétiques dans le bâtiment, simulation numérique, grasshopper</li>
        <li>
          <LinkedInLink profile="guillaume-habert-05940b13b">Pr. Dr.Guillaume Habert</LinkedInLink> - Professeur et directeur de la Chaire Construction durable à l'ETH Zurich.
          <br />
          Rôle : supervision du protocole d'analyse et des indicateurs carbone, membre du comité scientifique</li>
        <li><LinkedInLink profile="yasmine-priore-28764265/?originalSubdomain=ch">Yasmine Priore</LinkedInLink> - Doctorante diplômée du Master "Integrated building system" de l'ETH Zurich. Analyse de Cycle de Vie de bâtiment neutre pour le climat, experte en énergie et développement de trajectoire bas carbone.</li>
      </ul>

      <h3>LéAV – Architecture Research Laboratory of ENSA Versailles</h3>
      <p>
        L'équipe s'attache également les compétences du laboratoire de recherche en architecture de l'ENSA Versailles, le <strong>LéAV</strong>.
      </p>

      <ul>
        <li><LinkedInLink profile="nathalie-simonnot-1b0580180">Nathalie Simonnot</LinkedInLink> - Ingénieur de recherche HDR, enseignant-chercheur et directrice du LéAV,</li>
        <li><LinkedInLink profile="susanne-stacher-89238157">Pr. Dr.Susanne Stacher</LinkedInLink> - Architecte chercheur et professeure HDR membre du LéAV, membre du comité scientifique</li>
      </ul>
      <h2>Partners</h2>
      
      <h3>PRA - Founder of openarchitecture.org</h3>
      <p>
        <strong>Philippe Rizzotti Architecte – PRA</strong>, initiator of the project, is responsible for the <strong>leadership, overall coordination, and administrative management</strong> of the consortium. The agency served as <strong>scientific curator</strong> for the exhibition <em>L'Empreinte d'un habitat – construire léger et décarboné</em>, presented from October 2021 to February 2022 at the Pavillon de l'Arsenal in Paris, and later in September 2023 at the Rotterdam Architecture Biennale. In 2022, <LinkedInLink profile="philippe-rizzotti">Philippe Rizzotti</LinkedInLink>, director of the agency, joined the teaching team of the <strong>DPEA "Post-Carbon Architecture"</strong> at the École d'Architecture de la Ville et des Territoires, Paris-Est, and launched the project for a Digital Atlas of Post-Carbon Architecture in partnership with Ingerop and the Chair for Sustainable Construction at ETH Zurich. In 2023, the Digital Atlas of Post-Carbon Architecture project was awarded funding as a laureate of the third round of the <strong>PIA IV – Digitization of Architecture and Heritage</strong> – receiving <strong>€400,000 in public funding</strong>, in addition to <strong>€647,000 in private funding</strong> already secured. In 2024, PRA was accredited by the French Ministry of Higher Education and Research, enabling it to consolidate a <strong>€300,000 research grant from Holcim</strong>, following the agency's receipt of the <strong>Montgolfier Prize</strong> from the Société d'Encouragement pour l'Industrie Nationale, awarded by the Committee on Fine Arts and Construction chaired by <LinkedInLink profile="bertrand-lemoine">Bertrand Lemoine</LinkedInLink>, for its work on promoting carbon quantification in architecture.
      </p>

      <p><strong>Team:</strong></p>
      <ul>
        <li><LinkedInLink profile="margot-manasse-001997ab">Margot Manasse</LinkedInLink>, Architecte DE (Paris-Malaquais, 2022), currently pursuing a specialization diploma in Architecture and Major Risks.<br />
          Role: Supervision and guidance of the digital model production team, as well as verification and analysis of the digital twins.</li>
        <li><LinkedInLink profile="blaise-mouret-b03b20175">Blaise Mouret</LinkedInLink>, Architecte DE, diplômé de l'ENSA Paris-Malaquais et du master en Sciences du Patrimoine à l'Université Paris-Saclay en 2023.<br />
          Rôle: Coordination et mise au point du programme de recherche, du protocole et de la conception de l'interface.</li>
        <li><LinkedInLink profile="philippe-rizzotti-64432725">Philippe Rizzotti</LinkedInLink>, Architecte DPLG, maître de conférences (ENSAP Lille), enseignant-chercheur au LéaV et intervenant à la formation DPEA Post-Carbone.<br />
          Rôle: Supervision et dissémination de la recherche.</li>
        <li><LinkedInLink profile="lawan-kila-toe-24041329b">Lawan-Kila Toe</LinkedInLink>, Architecte HMONP, diplômé de l'ENSA Versailles en 2022.<br />
          Rôle: Co-encadrement de l'équipe de réalisation des maquettes numériques.</li>
      </ul>

      <p><strong>Interns:</strong></p>
      <ul>
        <li><LinkedInLink profile="tom-beldjilah">Tom Beldjilah</LinkedInLink>, Architecte stagiaire salarié de l'ENSA Versailles<br />
        Rôle : Modélisation et analyse des maquettes numériques.<br />
        Période de stage : septembre 2023 - janvier 2024 / Prestataires : depuis Mai 2024</li>
        <li><LinkedInLink profile="lucian-bour">Lucian Bour</LinkedInLink>, Étudiant en ingénierie à l'ESTP <br />
        Rôle : Modélisation et analyse des maquettes numériques.</li>
        <li><LinkedInLink profile="martin-debeljak">Martin Debeljak</LinkedInLink>, Architecte stagiaire salarié de la faculté d'architecture de l'Université de Ljubljana <br />
        Rôle : Modélisation et analyse des maquettes numériques.<br />
        Période de stage : mars 2024 - juillet 2024</li>
        <li><LinkedInLink profile="/l%C3%A9na-fritz-4a9b70232/">Léna Fritz</LinkedInLink>, Étudiante en architecture et ingénierie à ESTP et ENSA Paris La Villette<br />
        Rôle : Modélisation et analyse des maquettes numériques.</li>
      </ul>

      <p><strong>Consultants:</strong></p>
      <ul>
        <li><LinkedInLink profile="paride-zambelli-992a5b191">Paride Zambelli</LinkedInLink>, Architecte HMONP, diplômé de l'école Polytechnique de Milan en 2021.<br />
        Rôle: Consultant Ux & Ui, assistance à la supervision de la création de l'interface et des outils d'analyse<br />
        Emploi freelance: depuis février 2024</li>
        <li><LinkedInLink profile="sebastienperrault">Sebastien Perrault</LinkedInLink>, Ingénieur concepteur informatique, Fondateur de ECHOES.PARIS<br />
        Rôle: conseil au développement de l'application avec aperçu 3D et création de la plateforme.</li>
        Atelier Santos Lemarchand:
        <li><LinkedInLink profile="no%C3%A9mie-santos-259643157/?originalSubdomain=fr">Noémie Santos</LinkedInLink>, Graphiste et fondatrice de Atelier Santos Lemarchand<br />
        Rôle: Supervision de la programmation et graphisme de l'interface</li>
        <li><LinkedInLink profile="antoine-lemarchand">Antoine Lemarchand</LinkedInLink>, Graphiste et fondateur de Atelier Santos Lemarchand<br />
        Rôle: Supervision de la programmation et graphisme de l'interface</li>
      </ul>

      <h3>ARCORA - Partenaire doubles numériques</h3>
      <p>
        <strong>ARCORA</strong>, was originally responsible for supporting the consortium in <strong>structuring the project's protocol and components</strong>. The firm provides technical expertise in <strong>carbon footprint analysis</strong> of building envelope elements and, more specifically, draws on its experience in interfacing <strong>Rhino+Grasshopper models</strong> with a web-based interface, acquired during the development of the <strong>ECALE project</strong>. ARCORA is an engineering firm specialized in <strong>metal structures, façades, and glass roofs</strong>, working alongside architects to deliver the most appropriate technical solutions. As a subsidiary of the multi-disciplinary engineering group <strong>INGEROP</strong>, ARCORA integrates environmental concerns and material innovations, having for several years systematically incorporated <strong>carbon footprint assessments</strong> into the technical solutions proposed for each project. This approach has led to the development of dedicated digital tools, including <strong>ECALE</strong>, which has contributed to the dissemination—first within INGEROP, and then on a broader scale—of niche expertise and complex calculation methods, thereby enhancing the capabilities of the project team.
      </p>

      <ul>
        <li><LinkedInLink profile="maria-carbonell-32826425">Maria Carbonell</LinkedInLink> - Architecte-ingénieure et cheffe de projet chez Arcora, expertise technique de pointe sur la conception de façades complexes et co-porteuse du projet de développement ECALE.</li>
        <li><LinkedInLink profile="arnaud-clavreul-2156bb37">Arnaud Clavreul</LinkedInLink> - Ingénieur diplômé de la CentraleSupélec en 2013 et chef de projet chez Arcora. Expertise technique de pointe en programmation visuelle Grasshopper pour Rhino et en conception d'ouvrages de façades, co-porteur du projet de développement ECALE</li>
        <li><LinkedInLink profile="hippolyte-vienot-de-vaublanc-650027142">Hippolyte Vienot de Vaublanc</LinkedInLink> - Architecte-ingénieur diplômé de l'ENSAPLV et de l'ESTP en 2022. Chef de projet adjoint chez Arcora.</li>
      </ul>

      <h2>Consultants</h2>

      <h3>CLL Avocat - Cabinet d'avocat</h3>
      <p>
        Le cabinet CLL Avocats est composé de seize avocats inscrits au barreau de Paris, dont trois associés : <LinkedInLink profile="olivier-caron">Olivier CARON</LinkedInLink>, <LinkedInLink profile="alexandre-labetoule">Alexandre LABETOULE</LinkedInLink> et <LinkedInLink profile="erwan-lazennec">Erwan LAZENNEC</LinkedInLink>.
      </p>

      <ul>
        <li><LinkedInLink profile="olivier-caron-89a28565">Olivier Caron</LinkedInLink>, Avocat associé gérant de CLL Avocat.</li>
        <li><LinkedInLink profile="claire-meyer-a569948b">Claire Meyer</LinkedInLink>, Avocate au barreau de Paris</li>
      </ul>

      <h3>EIF Innovation - Partenaire innovation et structuration de la recherche</h3>
      <p>
        <strong>EIF Innovation</strong>, a consulting firm specialized in <strong>innovation financing and management</strong>, is responsible for the <strong>financial structuring, self-assessment, and annual reporting</strong> of the research program. The firm has strong expertise in the architecture sector, having supported <strong>over one hundred agencies</strong>. Its approach focuses on the management and structuring of <strong>R&D and innovation activities</strong>.
      </p>

      <ul>
        <li><LinkedInLink profile="fabian-venanchias-21763b63">Fabian Venanchias</LinkedInLink>, Directeur adjoint EIF Innovation<br />
        Rôle: Supervision de l'auto-évaluation du temps de travail et du reporting des actions réalisées</li>
      </ul>
      </div>
  );
};

export default Team;
