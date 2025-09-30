import React from 'react';
import styles from './Protocol.module.css';
import imgCyclecarbone from "../../data/images/cyclecarbone.jpg"
import formuleMass from "../../data/images/formule_masse.jpg"
import formuleEfficacity from "../../data/images/formule_efficacite.jpg"
import formuleEmpreinte from "../../data/images/formule_empreinte.jpg"
import formuleComplex from "../../data/images/formule_complexite.jpg"
import LifeCycleTable from '../ComplexTable/ComplexTable';
const Protocol = () => {
  return (
    <div className={styles.projectDisplay}>
      <h2 className={styles.pageTitle}>Protocol</h2>
      <p>
        Operation supported by the French government as part of the "Heritage and Architecture Digitization" initiative under France 2030, managed by the Caisse des Dépôts, with additional support from HOLCIM France. Led by Philippe Rizzotti Architecte, in partnership with ARCORA and ETH Zurich.
      </p>
      <h3>Abstract</h3>
      <p>
        The 'Digital Atlas of Post-Carbon Architecture' aims to develop a common tool and an open database to facilitate and standardize the calculation of the carbon footprint in architecture. It should federate architects and engineers to collaborate and share projects and data.
        Our research project is a further development of the exhibition 'Housing Footprint – Light and low-carbon constructions', exhibited and published in 2021 by the Pavillon de l'Arsenal Paris, which presented a collection of 33 experimental individual and collective housing projects by means of digital models of construction drawings. Since then, this collection of projects has been expanded with the help of the student community and will soon be available online thanks to the creation of the openarchitecture.org website and the recent development of the Speckle application, which enables 3D modelling and data visualization.
      </p>
      <p>
        The aim of the 'Digital Atlas of Post-Carbon Architecture is to produce an extensive documentation for improving the carbon footprint and accelerating the spread of a post-carbon architectural culture, which is necessary to accompany and transform all sectors of construction. The interactive and collaborative platform links the visualization of digital models with a database that covers everything from components and construction systems to the entire building. A scientific protocol defines the analysis criteria and teaching methods for different levels of instruction. It provides training in environmental impact assessment methodology by linking various carbon databases to an ever-growing collection of projects, aiming to reduce the carbon footprint of architecture.
      </p>
      <p>
        The 'Digital Atlas of Post-Carbon Architecture is a collaborative research project that has received funding from the French Government and Holcim France, Arcora, Echoes and Oto Technology, supporting Philippe Rizzotti Architecte. He is part of the research laboratory LéaV of the École Nationale Supérieure d'Architecture de Versailles, and is associated for this research since 2019 with the Chair of Sustainable Construction of the ETH Zurich, using its self-developed Bombyx Grasshopper plugin.
      </p>
      <img src={imgCyclecarbone}/>
      <h3>1. Introduction</h3>
      <p>
        In Europe, 50% of materials extracted from the environment are used in construction, generating approximately 30% of the continent's waste. In France, in 2018, the infrastructure and building sector consumed nearly 400 million tons of mineral materials. Beyond extractions, building and public works activities generated almost 250 million tons of waste, accounting for nearly three-quarters of the country's total waste. It is therefore crucial to limit the consumption of raw materials, which entails significant transportation and a high environmental footprint.
      </p>
      <p>
        Carbon footprint (kg CO2 eq) is the reference unit for assessing greenhouse gas emissions. In 2021, the building and construction sector accounted for more than 35% of global final energy consumption and 39% of energy-related CO2 emissions. Understanding and managing the emissions associated with the production and transformation of construction materials play a key role in mitigating the climate impact of the construction sector. We believe it is essential to link material quantity parameters with emissions to better grasp this phenomenon.
      </p>
      <p>
        However, the scale of this information is difficult to comprehend, and carbon-related data is just as hard to find as it is to understand. The methodologies for assessing emissions are subject to intense debates and involve numerous specialists. Today, they vary across countries, each applying specific strategies and regulations adapted to their territory, despite the fact that emissions are a global issue. Although many countries have signed the Paris Agreements and committed to reducing emissions to keep global warming "well below 2°C," greenhouse gas emissions continue to rise and do not stop at national borders.
      </p>
      <p>
        In 2024, recorded temperature increases have already exceeded the 1.5°C threshold. It is therefore urgent to act collectively to find powerful action levers capable of significantly reducing greenhouse gas emissions. Although debates vary according to demography and level of economic development, the challenges are the same. Learning how to quantify carbon represents an exceptional opportunity to unite construction stakeholders and train future generations. They must, indeed, take hold of these assessment tools to design their future projects, whether they involve new constructions or conversions, infrastructures, or buildings.
        <br></br>
        Architecture primarily focuses on the solid and material state of cities and buildings (firmitas), the third pillar of Vitruvius' triad, alongside utility (utilitas) and beauty (venustas). In 1869, Dmitri Ivanovich Mendeleev created the periodic table, classifying materials into three categories: gas, liquid, and solid, from lightest to heaviest. Could this classification, used in chemistry, inspire a fundamental rethink of the relationship between materiality and architecture? We hypothesize that it is necessary to associate building mass estimation with carbon footprint evaluation by proposing a new classification. In fact, numerous architectural approaches already effectively address material economy and construction decarbonization. A better understanding of these examples could facilitate the development of new solutions through case study analyses based on empirical data and synthesis.
      </p>
      <p>
        With the research project Atlas Numérique d'Architecture Post-Carbone (Digital Atlas of Post-Carbon Architecture), we propose an in-depth study of such architectural examples, focusing first on the question of housing, which accounts for the majority of the constructed environment. Our project aims to develop digital models linked to multiple carbon databases from various countries, each using different calculation methods (modules), and continuously updated based on regulatory developments. This open and collaborative platform will be accessible on the website openarchitecture.org.
        The digital models can be created from architectural plans preserved in museum and foundation archives, but we also rely on professionals to contribute to this database. However, for many professionals it is challenging to find the time to compile heterogeneous data from completed project files. In Anglo-Saxon and German-speaking countries, this task may be easier when designers create execution drawings themselves and are responsible for project synthesis. But even if professionals lack the time to feed the database, they can still contribute by providing their detailed plans and technical information. Others can then produce digital models and make them available in the database, which is an excellent way of learning, particularly for future architects.
        By accurately modelling completed projects and contributing to the analytical synthesis, the student community helps build collective memory while understanding the complexity of carbon footprint calculations. They could then apply this methodology to their own projects.
      </p>
      <p>
        Therefore, we aim to train students in carbon quantification to develop this digital platform and, in the long term, promote resource-efficient material and energy management. By educating on carbon emissions assessment and disseminating this knowledge, we envision creating a new architectural culture, which we call post-carbon architecture. We rely on the engagement of academic researchers and practitioners to build an encyclopaedic body of knowledge that is currently lacking to effectively achieve carbon neutrality goals.
      </p>
      <p>
        A historical example illustrates the potential evolution of the architectural discipline. After World War II, during reconstruction, the Japanese government relied on architects to ensure that a maximum surface area of housing per inhabitant was provided, so that a maximum number of people to obtain shelter, despite material shortages and the need for mass construction. If all architects today were trained in the carbon assessment of buildings, they could be the guarantors of compliance with the environmental footprint of new constructions and building transformations, and thus ensuring that not only architectural quality but also environmental quality is respected. Achieving this ambition requires rethinking the role and responsibilities of architects, enhancing education by introducing new assessment tools, and broadly disseminating this new knowledge.
      </p>
      <p>
        The aim of the Digital Atlas is to analyse, compare and spread the results of good architectural practice by combining geometric information with carbon data analysis, allowing the visualisation of the results while evaluating the architectural and environmental qualities. At this stage, the research protocol has been validated by the Scientific Committee. The digital tools that have been developed allow a group of 2 or 3 students to analyse a complete building within a week, based on the data provided by the architects.
        Over the course of three years of PhD research, we've finalised the database and the digital tools, and the alpha version of the website is under construction. So far, 72 buildings constructed between 1730 and 2025, mainly in the industrialised countries of the Northern Hemisphere, have been analysed (excluding technical installations). The SBE25 conference will give us the opportunity to present our system to a large number of universities. Our team is now looking for additional funding to deploy this tool on a European level and to complement the academic version with a version for professionals, which would ensure the long-term economic development of the project.
      </p>
      <h3>2. Methods</h3>
      <h3>2.1. Understanding the Carbon Issue</h3>
      <p>
        In the Nordic countries (Norway, Sweden, Denmark, Finland, and Iceland), the rapid decarbonation of residential energy consumption has been achieved through the implementation of various regulatory measures. Since 1990, Finland has developed economic tools such as the carbon tax. Today, Sweden has the highest green taxation in the world. Since 1991, the introduction of a specific tax has contributed to a reduction of nearly 30% in its carbon emissions.      </p>
      <p>
        In Switzerland, since 2016, the Coordination Conference of Construction and Real Estate Services of Public Contractors (KBOB) has implemented the Ecobalance method. This calculation method, based on material and energy flow data, enables the assessment of a building's carbon emissions. It relies on data concerning construction materials, technical installations, energy supply, transport, and disposal processes, which are published biennially by KBOB, Ecobau, and IPB.
      </p>
      <p>
        In France, since 2022, the thermal regulation (RT), which previously only set limits on the energy consumption of new buildings, has evolved into environmental regulation (RE). This aims to progressively limit the carbon footprint of new constructions by relying on life cycle assessment (LCA) tools, akin to the Swiss Ecobalance methodology, while incorporating a broader range of parameters. Since 2023, several Nordic countries have a requirement in place to calculate CO2 emissions for new constructions, at least for the modules A1-A3 (A1-A5) or even beyond (Denmark).    
      </p>
      <h3>2.1. Understanding the Carbon Issue</h3>
      <p>
        Since the implementation of the RE2020 environmental regulation in France, the carbon footprint per square metre (kg eq.CO2/m2) of new building construction has been progressively restricted, with reduction milestones occurring every three years for different building typologies (residential, office, education). However, it is necessary to question the validity of these published data, which are based on the INIES database. Carbon data are typically evaluated by industry actors and made accessible through Environmental Product Declarations (FDES). It seems essential to assist designers in grasping the magnitudes and proportions of construction-related carbon emissions.
      </p>
      <h3>2.3. Life Cycle Assessment</h3>
      <p>
        Life Cycle Assessment (LCA) is an evaluation method that compiles the assessment of inputs, outputs, and potential environmental impacts of a material or product throughout its lifecycle—from the extraction of raw materials required for its manufacture to its end-of-life treatment (transport, landfill, recycling, etc.), including its usage, maintenance, and reuse phases. LCA was first established in academic research before gradually becoming a regulatory tool for assessing the environmental impact of a building over its entire lifespan. It is important to note that this impact is assessed across multiple criteria and is not limited to carbon emissions. In France, 36 impact indicators are used in LCA, focusing primarily on air quality (greenhouse gases, air acidification, tropospheric ozone, fine particles, etc.), water quality (water consumption, freshwater eutrophication, etc.), human health (toxicity, radioactivity), and resource depletion (renewable and non-renewable energy consumption, land use, etc.). Through complex conversion tables, kg eq. CO2 has gradually become the standard unit of measurement for environmental impact.
      </p>
      <p>
        An LCA is structured around different lifecycle stages of a material, referred to as "modules." Modules A1-A3 represent the production phase, A4-A5 the construction phase, B the operational phase, C the end-of-life phase, and D the revalorisation phase, including potential recycling, reuse, or recovery. Since 2016, Swiss regulations have focused on modules A1-A3 and D4 (reuse, recovery, recycling), whereas German and French regulations integrate all modules. In other words, the Swiss methodology is based on "Cradle to Gate," while the German and French methodologies follow "Cradle to Cradle."
      </p>
      <p>
        At the building scale, the LCA of different elements or components is aggregated to evaluate the overall environmental impact of the construction. However, the use of Module D concerning revalorisation remains a subject of debate, as it considers effects beyond the boundaries of the studied object (product or building). This issue may be addressed with the extension of LCA application to the transformation of existing buildings, currently only implemented in Switzerland.
        <br />
        When selecting a carbon database, it is crucial to carefully consider which modules are included to enable meaningful comparisons. Additionally, comparing results across databases using reference benchmarks, such as digital models, can be valuable. This is particularly relevant in transnational contexts, where construction systems are often more homogeneous than at the national level. For instance, brick construction is predominant in Northern Europe, dry stone construction in Southern countries, and timber construction in forested regions. Constructive logics are more closely related to environmental conditions than national boundaries. Comparative case studies would allow different databases to be interrogated, verifying potentially inconsistent results and refining their interpretation. This could accelerate synergies in research across schools of architecture and engineering.
      </p>
      <p>
        It would be beneficial to consider the standardisation of carbon databases at a European, or even international, scale to improve collaborative capabilities. The creation of common references and frameworks should enhance our capacity to better understand carbon footprint magnitudes, share large-scale analytical feedback, and rely on simplified, harmonised protocols accessible to a broader audience. Furthermore, it is crucial that exemplary architectural case studies adopt multi-criteria analyses to assess, for example, the relationship between material quantities used, carbon footprint evaluation, and utilisation lifespans.
      </p>
      <LifeCycleTable />
      <h3>3. Pedagogical Atlas</h3>
      <h3>3.1. Open Science</h3>
      <p>
        The objective of the Digital Atlas of Post-Carbon Architecture is to create both an educational tool and a knowledge dissemination platform aimed at training professionals within the construction industry to immediately limit and reduce the environmental impact of buildings. The uniqueness of the Atlas lies in the accessibility of its content and the incremental nature of its data. Furthermore, the results obtained must undergo verification. Transparency regarding the data used for life cycle analysis, as well as the visualisation of the associated geometries, is paramount. The project also seeks to foster collaboration through a methodology grounded in open science. In this regard, the openness of the protocol and the interoperability of digital twins contribute to the reproducibility of experiments and the scientific validation of results. The aim is to equip future generations with the necessary tools to comprehend the challenges of reducing environmental impact, enabling them to critically assess the results derived from regulatory calculations and to accurately influence their evolution in order to reduce, as much as possible and with immediate effect, our environmental debt.
      </p>
      <h3>3.2. Post-Carbon Architectural Culture </h3>
      <p>
        The concept of a building’s carbon footprint, virtually unknown merely a decade ago, represents an unprecedented development in the history of architecture. As we find ourselves unable to fit this new reality into an established framework, it is essential to construct a common language and a shared reference system that will allow us to meet the objectives set by emerging environmental regulations, ultimately guiding us towards decarbonised construction by 2050. At the same time, the diversity of proven sustainable practices from different historical and geographical contexts should serve as a source of inspiration. In this perspective, it is crucial to quantify the environmental benefits of exemplary past constructions that could serve as models for future developments. To instill an economy of means and a reduction in material usage—prioritising the transformation of existing buildings over their systematic demolition—it is necessary to educate young architects from the outset in assessing material life cycles, understanding production chains, and considering the temporality of construction projects. Beyond merely providing a tool, it is imperative to equip students, researchers, and professionals with what Bruno Latour describes as a new "mental, moral, organisational, administrative, and legal infrastructure" to support them in their mission and encourage immediate action. The Digital Atlas of Post-Carbon Architecture primarily targets the ecosystem of architectural and engineering schools (students, researchers, and educators) and subsequently the broader construction community, including designers (architects, consulting firms), builders (companies, industrial manufacturers, assemblers), and decision-makers (institutions, local authorities, developers, etc.).
      </p>
      <h3>3.3. The Practice of Redrawing and the Fabrication of Digital Twins</h3>
      <p>
        This research project also aligns with the tradition of architectural treatises, which for centuries were the dominant medium for transmitting architectural knowledge. This format was long the sole vehicle for the dissemination of scholarly discourse (Vitruvius, Alberti, Rondelet, Blouet, etc.). The methodology of the Atlas follows a pedagogical approach based on the practice of redrawing. The fabrication of digital models requires users to fully comprehend architectural projects by reconstructing them digitally, using available documentary resources. Notably, the production of preparatory drawings, preceding the construction of digital twins, along with their interpretation and correction by experienced educators based on accessible information, should enhance the quality of architectural education. The participation of practitioners is essential in ensuring access to the necessary data for the fabrication of digital models that accurately reflect the reality of built structures.
      </p>
      <h3>3.4. Interactive 3D Visualisations and Comparative Analysis of Digital Models</h3>
      <p>
        The interactive visualisation of case studies facilitates a deeper understanding of the data associated with each project while allowing for cross-comparisons at various scales. The digital interface enables users to simultaneously examine multiple layers of information, including several case studies at once. Users will be able to choose from different formats for visualising case studies: material details, representative fragments, construction systems, entire buildings, and their environments. Concurrently, they will have access to analytical assessments, descriptive project documentation, and evaluations based on the criteria outlined below. Multi-criteria analysis serves as a tool to help visualise and comprehend the organisation of materials, construction systems, and components. The didactic potential of visualisation and interactivity offered by Speckle facilitates the seamless integration of data and geometry, allowing users not only to understand and design architectural projects but also to reflect on the transformations required according to the specific context and historical period in which a project was conceived.
      </p>
      <h3>4. Parameters of Analysis & Visualisation of Objects</h3>
      <h3>4.1. Multi-Criteria Database</h3>
      <p>
        The methodology proposed for the analysis of case studies must, therefore, enable users to participate in the research programme by acquiring evaluation methods and contributing to the enrichment of a collaborative database. This database serves to integrate information drawn from heterogeneous documentary sources by constructing digital twins that permit the execution of multi‐criteria analyses at various levels, based on a rigorous protocol. The aim is to progressively incorporate an increasing number of projects over time to continually populate the database. Furthermore, the verification of the analyses should help to consolidate the results obtained. Freely accessible to the scientific and educational communities, the database could also be opened to professionals, subject to a strategy and ethical framework yet to be defined in consultation with the scientific committee.
      </p>
      <h3>4.2. Material Families Classified by Colour</h3>
      <p>
        It is deemed essential to associate the modelling of case studies with the data resulting from the multi‐criteria analyses through solutions such as Microsoft Power BI. Indeed, the relationship between the numerical data and both the construction method and the form of a building is inherently interlinked; disregarding this connection cannot contribute to a comprehensive understanding of the task, which is to build low‐carbon architecture. Equally, it is important to develop a didactic visual code that enables the ready identification of the nature of construction materials, thereby linking their geometric properties to the statistical evaluations. We therefore propose a colour‐coding system by material family. Here, a ‘material family’ refers to a group of materials sharing similar properties. (Such families are frequently employed in physics and chemistry lessons to introduce children to the recognition of materials.) Although several classifications are possible, we propose to distinguish six families, predominantly used in construction: mineral (grey as concrete), geo-sourced (beige as stone), bio-sourced (green as trees), glass (blue as glazing), plastic (pink as insulating foam) and metallic (red as fire).
      </p>
      <table className={styles.materialsTable}>
  <thead>
    <tr>
      <th className={styles.tableHeader}>Family</th>
      <th className={styles.tableHeader}>Definition</th>
      <th className={styles.tableHeader}>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className={styles.tableCell}>Mineral</td>
      <td className={styles.tableCell}>Mineral materials are inorganic substances extracted from the Earth's crust. They are commonly used in construction for their durability, fire resistance, and load-bearing capacity.</td>
      <td className={styles.tableCell}>
        Concrete: A mixture of cement, sand, gravel, and water.<br/>
        Brick: A construction material made from fired clay.
      </td>
    </tr>
    <tr>
      <td className={styles.tableCell}>Geosourced</td>
      <td className={styles.tableCell}>Geosourced materials refer specifically to substances directly derived from the geosphere, used in their raw state or with minimal processing. They are favored for their reduced environmental footprint.</td>
      <td className={styles.tableCell}>
        Stone: Used in construction (granite, limestone, marble).<br/>
        Earth: Cob, rammed earth, compressed earth blocks, adobe, etc.
      </td>
    </tr>
    <tr>
      <td className={styles.tableCell}>Biosourced</td>
      <td className={styles.tableCell}>Biosourced materials originate from renewable biological resources, generally of plant or animal origin. They serve as sustainable alternatives to petrochemical or mineral-based materials.</td>
      <td className={styles.tableCell}>
        Wood: Used for construction, furniture, and paper.<br/>
        Hemp: Used for insulation, textiles, and composites.<br/>
        Flax: Used for textiles and composite materials.
      </td>
    </tr>
    <tr>
      <td className={styles.tableCell}>Glass</td>
      <td className={styles.tableCell}>Glass is a non-crystalline, generally transparent material made from silica (sand), soda, and lime. It is widely used for its optical properties and durability.</td>
      <td className={styles.tableCell}>
        Windows and glazed doors: For transparency and daylighting.<br/>
        Thermal insulation: In the form of glass wool.<br/>
        Decoration: For items such as mirrors and home accessories.
      </td>
    </tr>
    <tr>
      <td className={styles.tableCell}>Plastic</td>
      <td className={styles.tableCell}>Plastics are synthetic polymeric materials primarily derived from petroleum. They are known for their lightness, malleability, and chemical resistance</td>
      <td className={styles.tableCell}>
        Polyethylene (PE): Used in plastic bags, bottles, and pipes.<br/>
        Polyvinyl chloride (PVC): Used in piping, window frames, and flooring.<br/>
        Polypropylene (PP): Used in textiles, packaging, and automotive parts.
      </td>
    </tr>
    <tr>
      <td className={styles.tableCell}>Metallic</td>
      <td className={styles.tableCell}>Metallic materials are elements or alloys primarily composed of metals. They are valued for their electrical and thermal conductivity, mechanical strength, and capacity for plastic deformation.</td>
      <td className={styles.tableCell}>
        Steel: An alloy of iron and carbon, widely used in construction and industry.<br/>
        Aluminum: Lightweight and corrosion-resistant, used in building structures and window frames.<br/>
        Copper: Used for electrical wiring and piping.
      </td>
    </tr>
  </tbody>
</table>
      <h3>4.3. Component Classification</h3>
      <p>
        Based on the analysis of the initial collections of case studies integrated into the database, a simplified classification of lots has been established to ensure that objects can be decomposed and hierarchised according to the UNIFORMAT II 2015 classification, whilst preserving the richness of the original terminology. This involves assigning a coding system in addition to the designers’ initial descriptions, to facilitate interconnections within the database. The implementation of a detailed classification across all modelled projects has emerged as an indispensable step in meeting the project’s ambitions for openness and quality in digitisation and evaluation. This coding logic must enhance the protocol for the creation of digital models and also enable the detection of errors. Without compromising the precision of the digital twins, it is a prerequisite for interoperability.
      </p>
      <table className={styles.workPackageTable}>
  <thead>
    <tr>
      <th className={styles.tableHeader}>No</th>
      <th className={styles.tableHeader}>Category</th>
      <th className={styles.tableHeader}>Work Package Name</th>
      <th className={styles.tableHeader}>Definition</th>
      <th className={styles.tableHeader}>Uniformat Classification Equivalent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className={styles.tableCell}>1</td>
      <td className={styles.tableCell}>F</td>
      <td className={styles.tableCell}>Structural Work</td>
      <td className={styles.tableCell}>All elements related to the building's primary structure, typically including foundations and load-bearing components.</td>
      <td className={styles.tableCell}>A - INFRASTRUCTURE</td>
    </tr>
    <tr>
      <td className={styles.tableCell}>2</td>
      <td className={styles.tableCell}>S</td>
      <td className={styles.tableCell}>Structure</td>
      <td className={styles.tableCell}>All vertical and horizontal elements designed to bear the building's load and ensure its rigidity and stability through load distribution.</td>
      <td className={styles.tableCell}>B10 - Superstructure</td>
    </tr>
    <tr>
      <td className={styles.tableCell}>3</td>
      <td className={styles.tableCell}>S</td>
      <td className={styles.tableCell}>Floor Slabs</td>
      <td className={styles.tableCell}>All components ensuring the building's watertightness.</td>
      <td className={styles.tableCell}>B10 - Superstructure</td>
    </tr>
    <tr>
      <td className={styles.tableCell}>4</td>
      <td className={styles.tableCell}>E</td>
      <td className={styles.tableCell}>Roofing</td>
      <td className={styles.tableCell}>All elements separating the building's interior volume from its external environment.</td>
      <td className={styles.tableCell}>B30 - Roof</td>
    </tr>
    <tr>
      <td className={styles.tableCell}>5</td>
      <td className={styles.tableCell}>E</td>
      <td className={styles.tableCell}>External Envelope</td>
      <td className={styles.tableCell}>All components designed to reduce heat loss in the building.</td>
      <td className={styles.tableCell}>B20 – Exterior Enclosure</td>
    </tr>
    <tr>
      <td className={styles.tableCell}>6</td>
      <td className={styles.tableCell}>E</td>
      <td className={styles.tableCell}>Insulation</td>
      <td className={styles.tableCell}>All components designed to reduce heat loss in the building.</td>
      <td className={styles.tableCell}>B20 - Exterior Enclosure<br/>or B30 - Roof</td>
    </tr>
    <tr>
      <td className={styles.tableCell}>7</td>
      <td className={styles.tableCell}>E</td>
      <td className={styles.tableCell}>External Joinery</td>
      <td className={styles.tableCell}>All opening elements facing the exterior of the building.</td>
      <td className={styles.tableCell}>B20 – Exterior Enclosure</td>
    </tr>
    <tr>
      <td className={styles.tableCell}>8</td>
      <td className={styles.tableCell}>E</td>
      <td className={styles.tableCell}>Internal Joinery</td>
      <td className={styles.tableCell}>All components that structure the interior spaces and circulation within the building.</td>
      <td className={styles.tableCell}>C10 - Interior Construction</td>
    </tr>
    <tr>
      <td className={styles.tableCell}>9</td>
      <td className={styles.tableCell}>E</td>
      <td className={styles.tableCell}>Internal Metalwork</td>
      <td className={styles.tableCell}>All internal metal fittings and closure systems within the building.</td>
      <td className={styles.tableCell}>C10 - Interior Construction</td>
    </tr>
    <tr>
      <td className={styles.tableCell}>10</td>
      <td className={styles.tableCell}>E</td>
      <td className={styles.tableCell}>Interior Finishes</td>
      <td className={styles.tableCell}>All partitions, ceilings, and interior surface finishes.</td>
      <td className={styles.tableCell}>C10 - Interior Construction</td>
    </tr>
    <tr>
      <td className={styles.tableCell}>11</td>
      <td className={styles.tableCell}>E</td>
      <td className={styles.tableCell}>External Metalwork</td>
      <td className={styles.tableCell}>All external metal fittings and closure systems of the building.</td>
      <td className={styles.tableCell}>B20 – Exterior Enclosure</td>
    </tr>
    <tr>
      <td className={styles.tableCell}>12</td>
      <td className={styles.tableCell}>IN/<br/>OUT</td>
      <td className={styles.tableCell}>Furniture</td>
      <td className={styles.tableCell}>All furniture specifically designed for the project.</td>
      <td className={styles.tableCell}>E20 – Furnishings</td>
    </tr>
    <tr>
      <td className={styles.tableCell}>13</td>
      <td className={styles.tableCell}>IN/<br/>OUT</td>
      <td className={styles.tableCell}>Building Services</td>
      <td className={styles.tableCell}>All technical systems and equipment required for building habitability.</td>
      <td className={styles.tableCell}>D - Services</td>
    </tr>
    <tr>
      <td className={styles.tableCell}>14</td>
      <td className={styles.tableCell}>IN/<br/>OUT</td>
      <td className={styles.tableCell}>Landscaping and Sitework</td>
      <td className={styles.tableCell}>All external and landscaping works associated with the building.</td>
      <td className={styles.tableCell}>G - Building Sitework</td>
    </tr>
  </tbody>
</table>

      <h3>4.4. Estimation of Quantities and Evaluation of the Carbon Footprint of Materials</h3>
      <h3>Surface area mass - kg/m2</h3>
      <p>
        The surface mass of the object under study is defined as the sum of the masses of the materials required for the construction of a structure, divided by the number of square metres of habitable space. It is expressed in kilograms per square metre. Its value provides insights into both the construction method (whether light or massive) and the transportation effort necessary to supply the construction elements to the site or factory. The evaluation of the surface mass of the construction system (or of the representative fragment) or of the overall volumetry of a case study (building) is the ratio of the total mass of the various materials used (kg) to the floor area (m²).
      </p>
      <img src={formuleMass} />
      <h3>Surface Carbon Footprint - kg eq. CO2/m2</h3>
      <p>
The estimation of the carbon footprint generated by the construction enables the measurement of the amount of greenhouse gases emitted by the production and implementation of the materials used, as well as by the demolition or disassembly of the building. It is calculated in kilograms of carbon dioxide equivalent per square metre of habitable space (kg eq. CO₂/m²). The CO₂ equivalent reflects the greenhouse gases converted into kilograms of CO₂. The inherent CO₂ associated with each material is strongly influenced by the degree of transformation and the amount of energy utilised during its production processes and throughout its life cycle. The estimation of the surface carbon footprint of a construction system (or the representative fragment) or of the complete volumetry of a case study is the ratio between the total carbon footprint and the floor area of the building or building fragment. 
      </p>
      <img src={formuleEmpreinte} />
      <p>
        For these two criteria, the precision of the data depends on the quality of the documentary sources used to identify the materials and on the accuracy of the digital model linking them to the carbon database. In all cases, these evaluations are based on estimates; the results must be contextualised, relativised, and interpreted. Moreover, the use of a denominator expressed in per cubic metre (/m³) would be even more pertinent than one in per square metre (/m²).
      </p>
      <h3>4.5. Complexity (Design Effort) and Efficiency (Construction Time)</h3>
      <h3>Complexity – Number of Different Components per Square Metre, c/m²:</h3>
      <p>
        Complexity is evaluated by the number of types of elements (e.g. bricks, tiles, etc.) and components (e.g. columns, beams, panels, etc.) required to construct a building per square metre. As the number increases, so does the complexity of the structure, necessitating effective management of the coherence between the parts and improved coordination among the different trades. This criterion facilitates the evaluation of the design effort. The complexity of a construction system (or the representative fragment) or of a building’s overall volumetry is defined as the ratio between the number of different components and the floor area.
      </p>
      <img src={formuleComplex} />
      <h3>Efficiency – Total Number of Components per Square Metre, u/m²</h3>
      <p>
        The efficiency of a structure is defined by the average, normalised number of components required to create one square metre of habitable space. To simplify its definition, it is calculated as the ratio of the total number of elements and components to the area in square metres. Generally, the fewer the components required, the more rapid the construction, although the dimensions of these components are typically larger. This parameter enables the evaluation of the efficiency of the construction process or the speed of the building’s erection.      </p>
      <img src={formuleEfficacity} />
      <h3>4.6. Energy and Economy</h3>
      <p>
        To further enhance our capacity to interpret the results obtained via the four preceding criteria, the analysis must be supplemented with energy and economic parameters in order to fully appreciate the overall ecological benefits of the case studies.
      </p>
      <h3>Energy</h3>
      <p>
        The energy consumption of a building depends on the interplay between climatic conditions, the qualities of the building envelope (i.e. the thermal resistance of the various complexes), the expected level of comfort (thermal comfort), the behaviour of the occupants, the type of heating or cooling system employed, and the total energy consumed annually. It would be of considerable interest for the most advanced studies to utilise meteorological bulletins and energy consumption records to comprehensively complement certain analyses.
      </p>
      <h3>Economics</h3>
      <p>
        The economic assessment comprises construction, operational, and ideally functional costs, to enable a comprehensive analysis of overall expenditure. This information, which is of particular interest to construction professionals, would allow for a more robust evaluation of the relationship between investment control and environmental impacts, otherwise referred to as carbon cost or carbon efficiency. In this research project, the objective is to highlight the most exemplary solutions and to situate the results within their respective cultural, social, economic, and regulatory contexts. It is pertinent to study projects that demonstrate a progressive integration of environmental strategies aimed at limiting overall energy consumption. For example, the Aktivhaus-Siedlung Winnenden project by Werner Sobek generates sufficient energy to be self-sufficient while emitting neither emissions nor residual waste. In this respect, it constitutes the first zero-energy, zero-emissions, zero-waste project, a concept known as “Triple Zero.”.
      </p>
      <h3>5. Conclusion</h3>
      <p>
        The transmission of a collaborative methodology and the development of an incremental database—which associates digital models of noteworthy buildings with evaluations of their environmental footprints—should enable the rapid education of students. Consequently, the future generation of architects will be able to utilise the Digital Atlas of Post-Carbon Architecture in the design of new projects, whether these involve new constructions or the transformation of existing structures. The principle of quantitative evaluation is applicable to all types of buildings. For reasons of economy of means, we have initially populated this database with individual and collective housing. Over time, it is anticipated that the database will gradually expand to include other building types, such as commercial structures, offices, educational institutions, and other public establishments.
      </p>
      <p>
        Through a homogenised graphical representation of diverse architectural projects and a systemic visualisation of materiality according to defined analytical parameters (via a colour code), the Atlas, with its multitude of digital models, constitutes an encyclopaedic repository that facilitates the comparison of architectures at various scales—from fragments to construction systems, and up to entire buildings. In addition to the analytical parameters already established (mass, carbon footprint, complexity, efficiency, energy, and economy), it is possible to progressively integrate new parameters, such as energy consumption or temporal transformation processes. To minimise potential sources of error, it is crucial to continue analysing the captured architectural examples to better verify the results obtained, for an expertise is not proven until it is reproducible.
      </p>
      <p>
        The compilation of these encyclopaedic data could also aid in the development of an artificial intelligence that serves architects and engineers. Thus, machine learning could enable the development of a method for estimating the greenhouse gas emissions embedded in buildings. By training learning models on several hundreds, or even thousands, of examples classified according to their geometry, the physical properties of materials, and a multitude of other parameters, we could achieve significant breakthroughs in reducing the environmental footprint of construction. However, the creation of an encyclopaedic digital tool, when coupled with the development of machine learning models, should not be repurposed as an automated design tool that might risk supplanting the essential role of the architect. Rather, architects should focus more on the provenance of materials and local construction practices to address the major challenges of sustainability. Ultimately, through the training provided by the Atlas, tomorrow’s architects could not only be custodians of the quality of living environments, as has been the case to date, but also of the environmental footprint.
      </p>
      <h3>6. Acknowledgements</h3>
      <p>The Post-Carbon Digital Atlas of Architecture is supported by the French government as part of France 2030's “Digitisation of Heritage and Architecture” initiative and Holcim France. The opinions expressed in this paper are those of the authors only and do not represent the European Commission's official position. The authors appreciate the help from Maria Carbonel, Margot Manasse, Blaise Mouret, Lawan-Kila Toe and Paride Zambelli for their contribution on data collection and Sébastien Perrault for its contribution to tools development</p>
      <h3>References</h3>
      <ol className={styles.referenceList}>
        <li>European Commission, Construction and demolition waste [Internet]. Available from: <a href="https://ec.europa.eu/environment/topics/waste-and-recycling/construction-and-demolition-waste_fr" target="_blank" rel="noopener noreferrer">ec.europa.eu/environment/topics/waste-and-recycling/construction-and-demolition-waste_fr</a></li>
        <li>Adams M, Burrows V, Richardson S, Drinkwater J, Gamboa C, Collin C, Den X, Riemann L, Porteron S, Secher A. Bringing embodied carbon upfront: coordinated action for the building and construction sector to tackle embodied carbon. World Green Building Council; 2019.</li>
        <li>AzariJafari H, Guest G, Kirchain R, Gregory J, Amor B. Towards comparable environmental product declarations of construction materials: insights from a probabilistic comparative LCA approach. Build Environ. 2021</li>
        <li>Birgisdottir H, Hoxha E, Röck M. Climate IMPACT of EU building materials: Data compilation and statistical analysis of global warming potential in environmental product declarations. Sustain Prod Consum. 2025 Mar;54:64-74.</li>
        <li>A detailed periodic table of the elements is an enhanced version of the traditional periodic table that presents comprehensive information for each element. International Union of Pure and Applied Chemistry. Periodic Table of Elements [Internet]. 2019 [cited 2025 Mar 09]. Available from: <a href="https://iupac.org/periodic-table/" target="_blank" rel="noopener noreferrer">https://iupac.org/periodic-table/</a></li>
        <li>Hopkins R. Transition Towns [Internet]. Transition Network; 2006 [cited 2025 Mar 09]. Available from: <a href="https://www.transitionnetwork.org/" target="_blank" rel="noopener noreferrer">https://www.transitionnetwork.org/</a></li>
        <li>Tsukamoto Y (Atelier Bow-Wow). Genealogy of the critical space in Japanese houses: "World War II and single family houses. El Croquis no.191, The Architectural Position of Go Hasegawa 2005–2017. Japan; 2018.</li>
        <li>Koordinationskonferenz der Bau- und Liegenschaftsorgane der Öffentlichen Bauherren (KBOB). Coordination conference for the building and property departments of public-sector clients [Internet]. [cited 2025 Mar 09]. Available from: <a href="https://www.kbob.admin.ch/fr/" target="_blank" rel="noopener noreferrer">https://www.kbob.admin.ch/fr/</a></li>
        <li>French Ministry for the Ecological Transition. RE 2020 – A new approach for low-carbon construction [Internet]. Paris: French Ministry for the Ecological Transition. Available from: <a href="https://www.ecologie.gouv.fr/politiques-publiques/reglementation-environnementale-re2020" target="_blank" rel="noopener noreferrer">https://www.ecologie.gouv.fr/politiques-publiques/reglementation-environnementale-re2020</a></li>
        <li>INIES: the reference environmental and health database for the building industry and the RE2020 [Internet]. Available from: <a href="https://www.inies.fr/" target="_blank" rel="noopener noreferrer">https://www.inies.fr/</a></li>
        <li>FDES: Environmental Product Declarations for construction products [Internet]. INIES; [cited 2025 Mar 09]. Available from: <a href="https://www.inies.fr/inies-et-ses-donnees/fdes-produits-de-construction/" target="_blank" rel="noopener noreferrer">https://www.inies.fr/inies-et-ses-donnees/fdes-produits-de-construction/</a></li>
        <li>Techopedia. Data incrementation [Internet]. Available from: <a href="https://www.techopedia.com/definition/27326/data-incrementation" target="_blank" rel="noopener noreferrer">https://www.techopedia.com/definition/27326/data-incrementation</a>. Data incrementation is the process of progressively adding new values to an existing set, often by numerically increasing or enriching information sequentially.</li>
        <li>Software plays a key role in scientific research, as a tool, a result and an object of study. Making software source codes available, with the possibility of modifying, re-using and distributing them, is a major challenge for ensuring the reproducibility of scientific results and supporting the sharing and creation of knowledge, in an open science approach.</li>
        <li>Latour B, Schultz N. Mémo sur la nouvelle classe écologique. Paris: Editions La Découverte; 2022. p. 28.</li>
        <li>At this stage, several schools are involved in developing the programme, including ETH-Z, which initiated the Bombyx project, ENSA Versailles, which is a partner in the research project, and ENSAP Lille, where the first pedagogical explorations were carried out.</li>
        <li>Speckle is transforming the AEC industry with its collaborative data hub, offering a new way to connect and share data seamlessly across design and construction tools.</li>
        <li>UNIFORMAT II (2015) is a standardised classification system for organising building components according to their function, used in cost estimating, life-cycle analysis and building management. It divides components into broad functional categories (foundations, structures, envelopes, finishes, equipment, etc.), independently of materials or construction methods. Published by ASTM International (standard ASTM E1557-15), it facilitates project comparison and asset management. This modular approach provides greater consistency in planning and monitoring building performance. Source: ASTM International. ASTM E1557-15 Standard Classification for Building Elements and Related Sitework-UNIFORMAT II. West Conshohocken, PA: ASTM International; 2015</li>
        <li>Rizzotti P. L'empreinte d'un habitat, construire léger et décarboné. Paris: Pavillon de l'arsenal; 2022. p. 14.</li>
        <li>Ibid., p.15.</li>
        <li>Werner Sobek's Triple Zero label refers to an architectural concept aimed at buildings that produce zero fossil energy, zero CO₂ emissions and zero waste, promoting fully recyclable and sustainable construction. Sobek W. Triple Zero [Internet]. Stuttgart: Werner Sobek; [cited 2025 Mar 09]. Available from: <a href="https://www.werner-sobek.com/en/sustainability/triple-zero/" target="_blank" rel="noopener noreferrer">https://www.werner-sobek.com/en/sustainability/triple-zero/</a></li>
      </ol>
    </div>  
  );
};

export default Protocol;
