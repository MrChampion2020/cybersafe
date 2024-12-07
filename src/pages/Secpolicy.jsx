import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Required for accessibility

const SecurityPolicy = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      title: "Small Organizations",
      description: "Basic security guidelines for startups and small teams.",
      features: [
        "Access control with strong passwords",
        "Data encryption and backups",
        "Device and network security",
      ],
      price: "Free (Basic Plan)",
      financialDetails: "Paid features available for a premium upgrade.",
      fullAccessFee: 10000,
      isFree: true,
    },
    {
      title: "Medium Organizations",
      description: "Comprehensive security measures for mid-sized companies.",
      features: [
        "Advanced network and endpoint security",
        "Regular security audits",
        "Incident response and recovery plans",
      ],
      price: "₦50,000 (30-day free trial)",
      financialDetails: "Full access to financial and advanced features requires payment.",
      fullAccessFee: 50000,
      isFree: false,
    },
    {
      title: "Large Organizations",
      description: "Enterprise-grade security solutions for large organizations.",
      features: [
        "SOC setup and real-time monitoring",
        "Comprehensive compliance adherence",
        "Advanced physical and data security",
      ],
      price: "₦200,000 (Paid Plan)",
      financialDetails: "Access requires payment. All financial details are disclosed on purchase.",
      fullAccessFee: 200000,
      isFree: false,
    },
  ];

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPlan(null);
  };

  const styles = {
    container: {
      padding: "20px",
      margin: "auto",
      maxWidth: "900px",
      fontFamily: "'Roboto', sans-serif",
    },
    planCard: {
      padding: "20px",
      margin: "15px 0",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "left",
    },
    header: {
      fontSize: "24px",
      fontWeight: "700",
    },
    button: {
      marginTop: "15px",
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#3498db",
      color: "white",
      fontWeight: "600",
      cursor: "pointer",
    },
    modal: {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        maxWidth: "500px",
        borderRadius: "10px",
      },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Company Security Policies</h1>
      <p>
        Select a plan to view the security policy details. Access to full features for some plans requires payment.
      </p>
      {plans.map((plan, idx) => (
        <div key={idx} style={styles.planCard}>
          <h2>{plan.title}</h2>
          <p>{plan.description}</p>
          <p>
            <strong>Price:</strong> {plan.price}
          </p>
          <button style={styles.button} onClick={() => openModal(plan)}>
            View Plan
          </button>
        </div>
      ))}

      {/* Modal */}
      {selectedPlan && (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={styles.modal}>
          <h2>{selectedPlan.title}</h2>
          <p>{selectedPlan.description}</p>
          <ul>
            {selectedPlan.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          {selectedPlan.isFree ? (
            <p>
              <strong>Financial Details:</strong> {selectedPlan.financialDetails}
            </p>
          ) : (
            <p>
              <strong>Warning:</strong> Access to detailed financial information requires payment of ₦
              {selectedPlan.fullAccessFee}.
            </p>
          )}
          <button style={styles.button} onClick={closeModal}>
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

export default SecurityPolicy;
