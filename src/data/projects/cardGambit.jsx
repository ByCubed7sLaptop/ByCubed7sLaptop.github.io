import {Project} from "../data";
var project = Project.Create({
    startDate: new Date(2023, 1, 13),
    endDate: new Date(),
    displayName: "Card Gambit",
    projectName: "cardgambit",
    description: "A chess game cross deck building roguelike!",
    tags: "Godot, C#, Chess, Complex mechanics",
    imgPath: "default",
    backgroundPath: "default"
});

project.blog = `

# Summary

## What

CardsGambit is an Godot-based game that blends card game mechanics with chess-inspired gameplay. Players build decks of cards, each containing unique effects and interactions, while managing pieces on a grid-based battlefield. The game features multiple states including menu navigation, deck selection, encounters (combat), shops for upgrades, reward systems, and game over screens. It's built using C#, leveraging Godot's resource system .tres files to define cards, pieces, movements, and attacks in a data-driven architecture.

# Starting Out: Environment & Tools

## Development Stack
- **Game Engine**: Godot 4.x (based on project.godot structure)
- **Programming Language**: C# (Godot's .NET integration)
- **Build System**: MSBuild (.csproj, .sln files)
- **IDE**: Visual Studio / VS Code with C# extensions

## Project Structure Overview
\`\`\`
CardsGambit/
├── scenes/          # Godot scene files (.tscn)
├── resources/       # Data configurations (.tres)
│   ├── pieces/      # Piece definitions (Pawn, Queen, etc.)
│   └── movements/   # Movement rules for pieces
├── scripts/         # C# game logic
├── textures/        # Visual assets
├── audio/           # Sound effects and music
└── shaders/         # Custom GLSL shaders
\`\`\`

## Key Dependencies (packages/)
The project uses NuGet packages managed through Godot's .NET integration. Typical dependencies include:
- Godot.NET SDK
- MonoDevelop tools
- Any custom card/chess logic libraries

# Base Architecture & Core Components

CardsGambit follows a **resource-oriented architecture** where game data is defined in \`.tres\` (Godot resource) files, separate from the code that uses them. This makes it easy to balance and modify gameplay without touching code.

## The Resource System
The project heavily relies on Godot's resource system:
- **Piece Resources**: Define chess-like pieces with stats, textures, movements, and attacks
- **Movement Resources**: Rules governing how pieces can move across the grid
- **Card Resources**: Effects that players can play during encounters

Example from \`ResourceGamePiece.cs\` (Pawn piece):
\`\`\`gdresource
[PieceResource]
PieceName = "Pawn"
Score = 1
Texture = ExtResource("piece_texture")
Movement = Array[Resource]([
    MovementPawn.tres,      # Basic forward movement
    MovementPawnOnRow.tres, # Row-based attacks
    MovementEnPassant.tres  # Special chess move
])
Attacking = Array[Resource]([
    MovementPawnAttack.tres # Combat rules
])
PromoteTo = ExtResource("PieceQueen.tres") # Promotion mechanic!
\`\`\`

## State Machine Architecture
The game flows through distinct states managed by \`SceneManager\`:
1. **Menu** → Main hub and settings
2. **ChooseDeck** → Select your card deck before starting
3. **Encounter** → Combat phase where cards are played
4. **Shop** → Buy upgrades between encounters
5. **Reward** → Collect loot after victories
6. **GameOver** → End game screen with results

# Modules Breakdown

## 1. Card System (\`resources/cards/\`)
Cards are the core gameplay mechanic. Each card has:
- A unique name and ID
- An effect type (damage, buff, summon, etc.)
- Cost requirements (mana, turn count, etc.)
- Visual representation (texture)

**Card Types:**
- **Combat Cards**: Direct attacks or defensive maneuvers
- **Buff Cards**: Temporary stat boosts for pieces
- **Summon Cards**: Spawn new units onto the board
- **Utility Cards**: Draw extra cards, manipulate resources

## 2. Piece System (\`resources/pieces/\`)
Chess-inspired units with distinct properties:

**Pawn (ResourceGamePiece):**
\`\`\`csharp
public class ResourceGamePiece : Resource {
    public string PieceName;      // "Pawn", "Queen", etc.
    public int Score;             // Point value for scoring
    public Texture2D Texture;     // Visual sprite
    public Array[Resource] Movement;  // Valid move patterns
    public Array[Resource] Attacking;   # Attack rules
    public Resource PromoteTo;    // What this becomes later
}
\`\`\`

**Movement System:**
Each piece can have multiple movement types:
- \`MovementPawn.tres\`: Forward one space (Vector2i(0, -1))
- \`MovementPawnOnRow.tres\`: Horizontal attacks on same row
- \`MovementEnPassant.tres\`: Special chess capture rule
- \`MovementPawnAttack.tres\`: Combat interaction rules

## 3. Encounter System (\`scenes/Encounter.tscn\`)
The heart of gameplay where cards meet pieces:
- Board state management (piece positions, health)
- Card hand display and selection
- Turn-based decision making
- Real-time feedback on card effects

**Flow:**
1. Player draws 5 random cards from their deck
2. Cards are displayed in a horizontal layout
3. Player clicks to play a card on target piece/space
4. Game validates move legality (movement + attack rules)
5. Effects resolve and board updates

## 4. Deck Management (\`scenes/ChooseDeck.tscn\`)
Pre-game preparation:
- Library of available cards
- Deck-building interface
- Cost/benefit analysis for card selection
- Save/load deck configurations

## 5. Shop System (\`scenes/Shop.tscn\`)
Post-combat upgrades:
- Purchase new pieces or cards
- Upgrade existing units (stats, abilities)
- Resource management (gold, experience points)
- Randomized offers each encounter

## 6. UI Systems
- \`UILife.tscn\`: Health bars and status indicators
- \`SceneManager.tscn\`: State transitions between screens
- Custom shaders for visual effects (\`shaders/\`)

# Code Examples & Patterns

## Loading Resources Dynamically
The game loads piece configurations at runtime:
\`\`\`csharp
// Example from ResourceGamePiece.cs
public class ResourceGamePiece : Resource {
    [Export] public string PieceName;
    [Export] public int Score;
    [Export] public Texture2D Texture;

    // Movement rules array
    [Export] public Array[Resource] Movement;

    // Attack patterns
    [Export] public Array[Resource] Attacking;
}

// Usage in encounter logic:
public void ValidateMove(Piece piece, Vector2i target) {
    foreach (var movement in piece.Movement) {
        if (movement.IsValid(piece.Position, target)) {
            return true; // Valid move found!
        }
    }
    return false;
}
\`\`\`

## Movement Validation
Each movement resource defines valid spatial patterns:
\`\`\`gdresource
# MovementPawn.tres - Forward only
[ResourceMovementSimple]
Spaces = Array[Vector2i]( [Vector2i(0, -1)] )  # One space forward
Xray = false                                   # Cannot jump over pieces
\`\`\`

## Card Effect System
Cards reference piece resources for spawning:
\`\`\`gdresource
# Example card definition structure
[CardResource]
CardName = "Summon Pawn"
Cost = 3
EffectType = Summon
TargetPiece = ExtResource("res://resources/pieces/Pawn.tres")
Quantity = 1
\`\`\`

# Gameplay Loop & Flow

## Typical Session:
1. **Start** → Menu screen with options
2. **Choose Deck** → Select 20 cards from library (balance mana costs)
3. **Encounter Begins** → Board loads, draw initial hand
4. **Combat Phase**:
   - Play cards to move/attack opponent pieces
   - Manage limited resources each turn
   - Adapt strategy based on board state
5. **Victory/Defeat** → Win triggers Shop/Reward, lose goes to GameOver
6. **Repeat** → Build stronger deck between encounters

## Strategic Elements:
- **Deck Building**: Balance aggressive vs defensive cards
- **Resource Management**: Spend wisely each turn
- **Positioning**: Chess-like spatial awareness
- **Risk Assessment**: When to promote pieces?

# Technical Deep Dive

## Godot Resource System Benefits
Using \`.tres\` files for game data provides:
1. **Hot Reloading**: Edit piece stats without restarting
2. **Version Control Friendly**: Text-based diffing
3. **Designer-Friendly**: Non-programmers can tweak values
4. **Modular Design**: Swap movement rules independently

## C# Integration Patterns
The project uses Godot 4's .NET binding:
\`\`\`csharp
// Resource scripts in C#
public class ResourceMovementSimple : Resource {
    [Export] public Array<Vector2i> Spaces;
    [Export] public bool Xray; // Can jump over pieces?

    public bool IsValid(Vector2i from, Vector2i to) {
        if (!Spaces.Contains(to - from)) return false;
        if (Xray) return true;

        // Check path blocking...
        return true;
    }
}
\`\`\`

## Scene Tree Architecture
\`\`\`
SceneManager (singleton)
├── Menu
│   ├── Start Game Button
│   └── Settings Panel
├── ChooseDeck
│   ├── Card Library Grid
│   └── Deck Preview
├── Encounter
│   ├── Board Container
│   │   ├── Piece Spots (grid-based)
│   │   └── Status Indicators
│   └── Hand Container
│       └── Playable Cards
├── Shop
│   ├── Upgrade List
│   └── Purchase Buttons
└── GameOver
    └── Results Summary
\`\`\`

# Next Steps & Expansion Ideas

## Immediate Improvements:
1. **Tutorial System**: Guide new players through mechanics
2. **Achievement Tracking**: Unlock badges for milestones
3. **Online Multiplayer**: PvP mode using Godot's networking
4. **Procedural Generation**: Random board layouts each encounter

## Content Additions:
- **More Piece Types**: Knights, Rooks, Bishops with unique movements
- **Card Expansion Packs**: Themed decks (fire, ice, dark magic)
- **Boss Battles**: Special encounters with powerful enemies
- **Campaign Mode**: Story-driven progression between encounters

## Technical Enhancements:
1. **Save System**: Persist deck builds and progress
2. **Analytics Dashboard**: Track player behavior and balance issues
3. **Mod Support**: Allow community-created cards/pieces
4. **Performance Optimization**: Particle effects, shader improvements

## Long-term Vision:
- **Cross-platform Release**: Mobile (Android/iOS) ports
- **Competitive Scene**: Ranked matchmaking system
- **Content Creator Tools**: Custom scenario editor
- **Esports Integration**: Tournament infrastructure

`;

export default project;
