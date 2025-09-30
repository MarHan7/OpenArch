import React from 'react';
import styles from './LifeCycleTable.module.css';

const LifeCycleTable = () => {
  return (
    <div className={`${styles.ritz} ${styles.gridContainer}`} dir="ltr">
      <table className={styles.waffle} cellSpacing="0" cellPadding="0">
        <tbody>
          <tr style={{height: '109px'}}>
            <td className={styles.s0} dir="ltr" rowSpan="2">Module</td>
            <td className={styles.s1} dir="ltr">Resources extraction</td>
            <td className={styles.s1} dir="ltr">Transport</td>
            <td className={styles.s1} dir="ltr">Manufacturing</td>
            <td className={styles.s1} dir="ltr">Transport</td>
            <td className={styles.s1} dir="ltr">Construction process on site</td>
            <td className={styles.s1} dir="ltr">Use</td>
            <td className={styles.s1} dir="ltr">Maintenance</td>
            <td className={styles.s1} dir="ltr">Repair</td>
            <td className={styles.s1} dir="ltr">Replacement</td>
            <td className={styles.s1} dir="ltr">Renovation</td>
            <td className={styles.s0} dir="ltr">Energy consumption in use</td>
            <td className={styles.s1} dir="ltr">Water consumption in use</td>
            <td className={styles.s1} dir="ltr">Deconstruction/demolition</td>
            <td className={styles.s1} dir="ltr">Transport</td>
            <td className={styles.s1} dir="ltr">Waste treatment</td>
            <td className={styles.s1} dir="ltr">Waste disposal</td>
            <td className={styles.s1} dir="ltr">Reuse, recovery, recycling</td>
          </tr>
          <tr style={{height: '20px'}}>
            <td className={styles.s2} dir="ltr">A1</td>
            <td className={styles.s2} dir="ltr">A2</td>
            <td className={styles.s2} dir="ltr">A3</td>
            <td className={styles.s2} dir="ltr">A4</td>
            <td className={styles.s2} dir="ltr">A5</td>
            <td className={styles.s2} dir="ltr">B1</td>
            <td className={styles.s2} dir="ltr">B2</td>
            <td className={styles.s2} dir="ltr">B3</td>
            <td className={styles.s2} dir="ltr">B4</td>
            <td className={styles.s2} dir="ltr">B5</td>
            <td className={styles.s2} dir="ltr">B6</td>
            <td className={styles.s2} dir="ltr">B7</td>
            <td className={styles.s2} dir="ltr">C1</td>
            <td className={styles.s2} dir="ltr">C2</td>
            <td className={styles.s2} dir="ltr">C3</td>
            <td className={styles.s2} dir="ltr">C4</td>
            <td className={styles.s2} dir="ltr">D</td>
          </tr>
          <tr style={{height: '20px'}}>
            <td className={styles.s0} dir="ltr">Life cycle stages</td>
            <td className={styles.s0} dir="ltr" colSpan="3">Production</td>
            <td className={styles.s3} dir="ltr" colSpan="2">Construction process</td>
            <td className={styles.s3} dir="ltr" colSpan="7">Use stages</td>
            <td className={styles.s3} dir="ltr" colSpan="4">End-of-life</td>
            <td className={styles.s3} dir="ltr">Profit and expenses</td>
          </tr>
          <tr style={{height: '27px'}}>
            <td className={styles.s0} dir="ltr" rowSpan="6">Types of environmental product declaration</td>
            <td className={styles.s4} dir="ltr" colSpan="3">Cradle to gate</td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s6}></td>
          </tr>
          <tr style={{height: '27px'}}>
            <td className={styles.s4} dir="ltr" colSpan="4">Cradle to site</td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s6}></td>
          </tr>
          <tr style={{height: '27px'}}>
            <td className={styles.s4} dir="ltr" colSpan="5">Cradle to Handover</td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s6}></td>
          </tr>
          <tr style={{height: '27px'}}>
            <td className={styles.s4} dir="ltr" colSpan="12">Cradle to end of use</td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s5}></td>
            <td className={styles.s6}></td>
          </tr>
          <tr style={{height: '27px'}}>
            <td className={styles.s4} dir="ltr" colSpan="16">Cradle to grave</td>
            <td className={styles.s6}></td>
          </tr>
          <tr style={{height: '27px'}}>
            <td className={styles.s7} dir="ltr" colSpan="17">Cradle to cradle</td>
          </tr>
          <tr style={{height: '20px'}}>
            <td className={styles.s0} dir="ltr">KBOB - Suisse</td>
            <td className={styles.s8} dir="ltr">A1</td>
            <td className={styles.s8} dir="ltr">A2</td>
            <td className={styles.s8} dir="ltr">A3</td>
            <td className={styles.s9}></td>
            <td className={styles.s10}></td>
            <td className={styles.s9}></td>
            <td className={styles.s9}></td>
            <td className={styles.s9}></td>
            <td className={styles.s9}></td>
            <td className={styles.s9}></td>
            <td className={styles.s9}></td>
            <td className={styles.s10}></td>
            <td className={styles.s9}></td>
            <td className={styles.s9}></td>
            <td className={styles.s9}></td>
            <td className={styles.s1} dir="ltr">C4</td>
            <td className={styles.s10}></td>
          </tr>
          <tr style={{height: '20px'}}>
            <td className={styles.s0} dir="ltr">LCA - USA</td>
            <td className={styles.s8} dir="ltr">A1</td>
            <td className={styles.s8} dir="ltr">A2</td>
            <td className={styles.s8} dir="ltr">A3</td>
            <td className={styles.s9}></td>
            <td className={styles.s10}></td>
            <td className={styles.s9}></td>
            <td className={styles.s9}></td>
            <td className={styles.s9}></td>
            <td className={styles.s9}></td>
            <td className={styles.s9}></td>
            <td className={styles.s9}></td>
            <td className={styles.s10}></td>
            <td className={styles.s9}></td>
            <td className={styles.s9}></td>
            <td className={styles.s9}></td>
            <td className={styles.s10}></td>
            <td className={styles.s10}></td>
          </tr>
          <tr style={{height: '20px'}}>
            <td className={styles.s0} dir="ltr">INIES - France</td>
            <td className={styles.s8} dir="ltr">A1</td>
            <td className={styles.s8} dir="ltr">A2</td>
            <td className={styles.s8} dir="ltr">A3</td>
            <td className={styles.s8} dir="ltr">A4</td>
            <td className={styles.s1} dir="ltr">A5</td>
            <td className={styles.s8} dir="ltr">B1</td>
            <td className={styles.s8} dir="ltr">B2</td>
            <td className={styles.s8} dir="ltr">B3</td>
            <td className={styles.s8} dir="ltr">B4</td>
            <td className={styles.s8} dir="ltr">B5</td>
            <td className={styles.s8} dir="ltr">B6</td>
            <td className={styles.s1} dir="ltr">B7</td>
            <td className={styles.s8} dir="ltr">C1</td>
            <td className={styles.s8} dir="ltr">C2</td>
            <td className={styles.s8} dir="ltr">C3</td>
            <td className={styles.s1} dir="ltr">C4</td>
            <td className={styles.s1} dir="ltr">D</td>
          </tr>
          <tr style={{height: '20px'}}>
            <td className={styles.s0} dir="ltr">Ökobaudat - Allemagne</td>
            <td className={styles.s8} dir="ltr">A1</td>
            <td className={styles.s8} dir="ltr">A2</td>
            <td className={styles.s8} dir="ltr">A3</td>
            <td className={styles.s8} dir="ltr">A4</td>
            <td className={styles.s1} dir="ltr">A5</td>
            <td className={styles.s8} dir="ltr">B1</td>
            <td className={styles.s8} dir="ltr">B2</td>
            <td className={styles.s8} dir="ltr">B3</td>
            <td className={styles.s8} dir="ltr">B4</td>
            <td className={styles.s8} dir="ltr">B5</td>
            <td className={styles.s8} dir="ltr">B6</td>
            <td className={styles.s1} dir="ltr">B7</td>
            <td className={styles.s8} dir="ltr">C1</td>
            <td className={styles.s8} dir="ltr">C2</td>
            <td className={styles.s8} dir="ltr">C3</td>
            <td className={styles.s1} dir="ltr">C4</td>
            <td className={styles.s1} dir="ltr">D</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LifeCycleTable;
