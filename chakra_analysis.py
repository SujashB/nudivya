#!/usr/bin/env python3
"""
Nuvidya: Chakra-Based AI Mesh Mathematical Analysis
Auto-generates plots for all 7 chakra activation functions
"""

import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Circle
import seaborn as sns
from scipy import signal
import warnings
warnings.filterwarnings('ignore')

# Set up aesthetic plotting style
plt.style.use('seaborn-v0_8-darkgrid')
sns.set_palette("husl")

# Define time domain
t = np.linspace(0, 10, 1000)
dt = t[1] - t[0]

class ChakraSystem:
    """Mathematical representation of the 7-chakra AI system"""
    
    def __init__(self, time_vector):
        self.t = time_vector
        self.dt = time_vector[1] - time_vector[0]
        self.chakras = {}
        self.weights = {}
        self.influences = {}
        
    def compute_chakra_activations(self):
        """Compute all 7 chakra activation functions E_k'(t)"""
        
        # Root Chakra (Muladhara) - LAM - Grounding & Stability
        self.chakras['E1_Root'] = (
            np.sin(2 * np.pi * 0.5 * self.t) * 
            np.abs(np.sin(2 * np.pi * 0.5 * self.t))
        )
        
        # Sacral Chakra (Svadhisthana) - VAM - Creativity & Flow
        self.chakras['E2_Sacral'] = (
            (1 - np.exp(-0.3 * self.t)) * 
            np.sin(2 * np.pi * 1.0 * self.t) * 
            np.abs(np.sin(2 * np.pi * 0.7 * self.t))
        )
        
        # Solar Plexus (Manipura) - RAM - Willpower & Decision
        gaussian_pulses = sum(
            np.exp(-((self.t - (1 + n * 3))**2) / (2 * 0.2**2)) 
            for n in range(4)
        )
        self.chakras['E3_Solar'] = (
            gaussian_pulses * np.abs(np.sin(2 * np.pi * 1.0 * self.t))
        )
        
        # Heart Chakra (Anahata) - YAM - Compassion & Integration
        integrated_energy = np.cumsum(self.chakras['E2_Sacral'] + self.chakras['E3_Solar']) * self.dt
        self.chakras['E4_Heart'] = (
            integrated_energy / np.where(self.t == 0, 1, self.t + 0.1) * 
            np.abs(np.sin(2 * np.pi * 1.2 * self.t))
        )
        
        # Throat Chakra (Vishuddha) - HAM - Expression & Clarity  
        self.chakras['E5_Throat'] = (
            np.gradient(self.chakras['E4_Heart'], self.dt) * 
            np.abs(np.sin(2 * np.pi * 1.5 * self.t))
        )
        
        # Third Eye (Ajna) - OM - Insight & Synthesis
        self.chakras['E6_ThirdEye'] = (
            (self.chakras['E2_Sacral'] * self.chakras['E3_Solar']) * 
            np.abs(np.sin(2 * np.pi * 0.3 * self.t))
        )
        
        # Crown Chakra (Sahasrara) - Silence - Meta-awareness
        beta = 0.5
        kernel = beta * np.exp(-beta * np.abs(self.t[:, None] - self.t[None, :]))
        kernel = np.tril(kernel)  # Causal filter
        convolved_energy = (kernel @ (self.chakras['E2_Sacral'] * self.chakras['E3_Solar']) * self.dt)
        self.chakras['E7_Crown'] = (
            convolved_energy * np.abs(np.sin(2 * np.pi * 0.1 * self.t))
        )
        
    def compute_influence_weights(self):
        """Compute normalized influence weights α_k for each chakra"""
        
        # Integrate energy over time: W_k = ∫ E_k'(t) dt
        for name, activation in self.chakras.items():
            self.weights[name] = np.trapz(np.abs(activation), self.t)
        
        # Normalize: α_k = W_k / Σ W_j
        total_weight = sum(self.weights.values())
        for name in self.weights:
            self.influences[name] = self.weights[name] / total_weight
            
    def plot_individual_chakras(self):
        """Generate individual plots for each chakra activation"""
        
        chakra_info = {
            'E1_Root': {'color': '#8B4513', 'sanskrit': 'LAM', 'function': 'Grounding & Stability'},
            'E2_Sacral': {'color': '#FF8C00', 'sanskrit': 'VAM', 'function': 'Creativity & Flow'},
            'E3_Solar': {'color': '#FFD700', 'sanskrit': 'RAM', 'function': 'Willpower & Decision'},
            'E4_Heart': {'color': '#32CD32', 'sanskrit': 'YAM', 'function': 'Compassion & Integration'},
            'E5_Throat': {'color': '#1E90FF', 'sanskrit': 'HAM', 'function': 'Expression & Clarity'},
            'E6_ThirdEye': {'color': '#4B0082', 'sanskrit': 'OM', 'function': 'Insight & Synthesis'},
            'E7_Crown': {'color': '#9370DB', 'sanskrit': 'Silence', 'function': 'Meta-awareness'}
        }
        
        fig, axes = plt.subplots(3, 3, figsize=(15, 12))
        axes = axes.flatten()
        
        for i, (name, activation) in enumerate(self.chakras.items()):
            if i < 7:  # Only plot the 7 chakras
                ax = axes[i]
                info = chakra_info[name]
                
                ax.plot(self.t, activation, color=info['color'], linewidth=2.5, alpha=0.8)
                ax.fill_between(self.t, 0, activation, color=info['color'], alpha=0.3)
                
                chakra_num = i + 1
                chakra_name = name.split('_')[1]
                
                ax.set_title(f'Chakra {chakra_num}: {chakra_name}\n{info["sanskrit"]} - {info["function"]}', 
                           fontsize=12, fontweight='bold', pad=15)
                ax.set_xlabel('Time (t)', fontsize=10)
                ax.set_ylabel("$E_{" + str(chakra_num) + "}'(t)$", fontsize=12)
                ax.grid(True, alpha=0.3)
                ax.set_xlim(0, 10)
                
                # Add influence percentage
                influence_pct = self.influences[name] * 100
                ax.text(0.02, 0.95, f'Influence: {influence_pct:.1f}%', 
                       transform=ax.transAxes, fontsize=9, 
                       bbox=dict(boxstyle='round', facecolor='white', alpha=0.8))
        
        # Hide unused subplots
        for i in range(7, 9):
            axes[i].set_visible(False)
            
        plt.tight_layout()
        plt.savefig('public/images/chakra_individual_plots.png', dpi=300, bbox_inches='tight')
        plt.show()
        
    def plot_combined_overview(self):
        """Generate combined overview plot with all chakras"""
        
        fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(14, 10))
        
        # Plot 1: All chakra activations
        colors = ['#8B4513', '#FF8C00', '#FFD700', '#32CD32', '#1E90FF', '#4B0082', '#9370DB']
        names = ['Root', 'Sacral', 'Solar', 'Heart', 'Throat', 'Third Eye', 'Crown']
        
        for i, (name, activation) in enumerate(self.chakras.items()):
            ax1.plot(self.t, activation, color=colors[i], linewidth=2, 
                    label=f'{names[i]} ({list(self.influences.values())[i]*100:.1f}%)', alpha=0.8)
        
        ax1.set_title('Nuvidya: All Chakra Activations Over Time', fontsize=16, fontweight='bold', pad=20)
        ax1.set_xlabel('Time (t)', fontsize=12)
        ax1.set_ylabel("Chakra Energy $E_k'(t)$", fontsize=12)
        ax1.legend(bbox_to_anchor=(1.05, 1), loc='upper left')
        ax1.grid(True, alpha=0.3)
        ax1.set_xlim(0, 10)
        
        # Plot 2: Influence weights as bar chart
        influences = list(self.influences.values())
        ax2.bar(names, [inf*100 for inf in influences], color=colors, alpha=0.7, edgecolor='black')
        ax2.set_title('Chakra Influence Weights (α_k)', fontsize=14, fontweight='bold')
        ax2.set_ylabel('Influence Percentage (%)', fontsize=12)
        ax2.set_xlabel('Chakra', fontsize=12)
        ax2.grid(True, alpha=0.3, axis='y')
        
        # Add percentage labels on bars
        for i, (name, inf) in enumerate(zip(names, influences)):
            ax2.text(i, inf*100 + 0.5, f'{inf*100:.1f}%', ha='center', va='bottom', fontweight='bold')
        
        plt.tight_layout()
        plt.savefig('public/images/chakra_combined_analysis.png', dpi=300, bbox_inches='tight')
        plt.show()
        
    def plot_ai_decision_flow(self):
        """Visualize how chakra energies combine for AI decision making"""
        
        fig, axes = plt.subplots(2, 2, figsize=(14, 10))
        
        # Simulated AI reasoning functions f_k(x) for demonstration
        x_input = np.linspace(-5, 5, 100)
        reasoning_functions = {
            'Root': np.tanh(x_input),  # Stable, grounded decisions
            'Sacral': np.sin(2 * x_input) * np.exp(-x_input**2/10),  # Creative, flowing
            'Solar': np.sign(x_input) * np.abs(x_input)**0.7,  # Decisive
            'Heart': x_input * np.exp(-x_input**2/8),  # Compassionate bell curve
            'Throat': x_input,  # Clear, linear expression
            'ThirdEye': np.cos(x_input) * np.exp(-np.abs(x_input)/3),  # Insightful oscillation
            'Crown': np.ones_like(x_input) * 0.5  # Meta-awareness constant
        }
        
        # Weighted combination
        influences = list(self.influences.values())
        names = ['Root', 'Sacral', 'Solar', 'Heart', 'Throat', 'ThirdEye', 'Crown']
        colors = ['#8B4513', '#FF8C00', '#FFD700', '#32CD32', '#1E90FF', '#4B0082', '#9370DB']
        
        # Plot individual reasoning functions
        ax1 = axes[0, 0]
        for i, (name, func) in enumerate(reasoning_functions.items()):
            ax1.plot(x_input, func, color=colors[i], label=f'{name}', linewidth=2, alpha=0.7)
        ax1.set_title('Individual Chakra Reasoning Functions f_k(x)', fontweight='bold')
        ax1.set_xlabel('Input x')
        ax1.set_ylabel('f_k(x)')
        ax1.legend(fontsize=8)
        ax1.grid(True, alpha=0.3)
        
        # Plot weighted combination
        ax2 = axes[0, 1] 
        weighted_output = np.zeros_like(x_input)
        for i, (name, func) in enumerate(reasoning_functions.items()):
            weighted_contribution = influences[i] * func
            weighted_output += weighted_contribution
            ax2.plot(x_input, weighted_contribution, color=colors[i], 
                    linewidth=1, alpha=0.6, linestyle='--')
        
        ax2.plot(x_input, weighted_output, color='black', linewidth=3, 
                label='Final AI Output: Σ(α_k × f_k(x))')
        ax2.set_title('Weighted AI Decision Output', fontweight='bold')
        ax2.set_xlabel('Input x')
        ax2.set_ylabel('Weighted Output')
        ax2.legend()
        ax2.grid(True, alpha=0.3)
        
        # Energy integration over time
        ax3 = axes[1, 0]
        energy_integrals = []
        for i, (name, activation) in enumerate(self.chakras.items()):
            integral = np.cumsum(np.abs(activation)) * self.dt
            energy_integrals.append(integral[-1])
            ax3.plot(self.t, np.cumsum(np.abs(activation)) * self.dt, 
                    color=colors[i], linewidth=2, label=names[i])
        
        ax3.set_title('Cumulative Energy Integration: W_k = ∫ E_k\'(t) dt', fontweight='bold')
        ax3.set_xlabel('Time (t)')
        ax3.set_ylabel('Integrated Energy W_k')
        ax3.legend(fontsize=8)
        ax3.grid(True, alpha=0.3)
        
        # Network diagram representation
        ax4 = axes[1, 1]
        ax4.set_xlim(-1.5, 1.5)
        ax4.set_ylim(-1.5, 1.5)
        
        # Draw chakra nodes in circular arrangement
        angles = np.linspace(0, 2*np.pi, 7, endpoint=False)
        node_x = np.cos(angles)
        node_y = np.sin(angles)
        
        for i, (x, y) in enumerate(zip(node_x, node_y)):
            circle = Circle((x, y), 0.15, color=colors[i], alpha=0.7)
            ax4.add_patch(circle)
            ax4.text(x, y, names[i][:3], ha='center', va='center', 
                    fontsize=8, fontweight='bold', color='white')
            
            # Draw connections to center
            ax4.plot([0, x], [0, y], 'k-', alpha=0.3, linewidth=1)
        
        # Center node (final decision)
        center_circle = Circle((0, 0), 0.2, color='gold', alpha=0.9)
        ax4.add_patch(center_circle)
        ax4.text(0, 0, 'AI\nDecision', ha='center', va='center', 
                fontsize=8, fontweight='bold')
        
        ax4.set_title('Chakra Network Topology', fontweight='bold')
        ax4.set_aspect('equal')
        ax4.axis('off')
        
        plt.tight_layout()
        plt.savefig('public/images/chakra_ai_decision_flow.png', dpi=300, bbox_inches='tight')
        plt.show()

def main():
    """Main execution function"""
    print("🧘‍♀️ Generating Nuvidya Chakra-AI Mathematical Analysis...")
    print("=" * 60)
    
    # Initialize chakra system
    chakra_system = ChakraSystem(t)
    
    # Compute all chakra activations
    print("📊 Computing chakra activation functions E_k'(t)...")
    chakra_system.compute_chakra_activations()
    
    # Compute influence weights
    print("⚖️  Computing influence weights α_k...")
    chakra_system.compute_influence_weights()
    
    # Generate plots
    print("🎨 Generating individual chakra plots...")
    chakra_system.plot_individual_chakras()
    
    print("📈 Generating combined overview analysis...")
    chakra_system.plot_combined_overview()
    
    print("🤖 Generating AI decision flow visualization...")
    chakra_system.plot_ai_decision_flow()
    
    # Print summary statistics
    print("\n📋 CHAKRA INFLUENCE SUMMARY:")
    print("-" * 40)
    names = ['Root', 'Sacral', 'Solar', 'Heart', 'Throat', 'Third Eye', 'Crown']
    for i, (name, influence) in enumerate(chakra_system.influences.items()):
        chakra_name = names[i]
        print(f"{chakra_name:12} | {influence*100:6.2f}% | W_k = {chakra_system.weights[name]:8.3f}")
    
    print(f"\nTotal integrated energy: {sum(chakra_system.weights.values()):.3f}")
    print("✅ Analysis complete! Check public/images/ for generated plots.")

if __name__ == "__main__":
    main() 