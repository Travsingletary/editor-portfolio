import json

file_path = '/Users/user/agent-zero/usr/projects/editor_portfolio/style_manifesto.json'

# Read the existing style_manifesto.json content
with open(file_path, 'r') as f:
    style_manifesto = json.load(f)

# Add final deployment URL
style_manifesto['final_deployment_url'] = 'https://travis-singletary.online'

# Update project phase and completion criteria
style_manifesto['project_phase'] = 'Portfolio Build - Content Integrated and Deployed'
style_manifesto['autonomous_workflow']['completion_criteria'] = [
    "Final portfolio URL accessible at https://travis-singletary.online",
    "Brand voice fully codified in style_manifesto.json",
    "Portfolio reflects both technical mastery and high-engagement digital creator persona",
    "Integration with skyrasmedia.com established",
    "Video IDs and social media links integrated"
]

# Summarize Brand Voice
brand_voice_summary = (
    "The brand voice for Travis Singletary is Professional yet approachable, authentic, and authoritative. "
    "It emphasizes personal journey and growth, industry expertise presented with humility, and is community-focused, responsive, and conversational. "
    "The core value proposition is sharing knowledge while building relationships, showcasing technical mastery, creative storytelling, and platform-optimized content strategy."
)
style_manifesto['brand_voice_summary'] = brand_voice_summary

# Write updated JSON back to file
with open(file_path, 'w') as f:
    json.dump(style_manifesto, f, indent=2)

print("style_manifesto.json updated successfully.")
