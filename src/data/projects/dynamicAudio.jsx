import {Project} from "../data";
var project = Project.Create({
    startDate: new Date(2023, 1, 13),
    endDate: new Date(),
    displayName: "DynamicAudio",
    projectName: "dynamicaudio",
    description: "A C++ music notation library tool",
    tags: "C++, University, Music, Library, Tool",
    imgPath: "default",
    backgroundPath: "default"
});

project.blog = `

# Summary

## What
**Uni-Final-DynamicAudio** is a C++ music notation library that provides sophisticated tools for creating, manipulating, and analyzing musical compositions programmatically. The project focuses on representing chords as collections of notes with support for transposition, duration management, and chord generation algorithms.

## Technology Stack
- **Language**: C++ (modern features like \`const\` correctness, range-based loops)
- **Core Component**: \`Chord\` class within the \`Music::Core\` namespace
- **Data Structure**: Uses \`std::vector<Note>\` for dynamic storage of notes
- **Design Philosophy**: RAII principles, const-correctness, and static factory methods

## Base Architecture & Core Components

The architecture centers around two main types:
1. **Note** - Represents individual musical notes with pitch and duration information
2. **Chord** - A collection of Notes that work together harmonically

The \`Chord\` class provides:
- **Storage**: \`_notes\` vector containing all constituent notes
- **Manipulation**: Methods to add/remove notes dynamically
- **Transformation**: Transposition by semitone intervals
- **Analysis**: Duration calculation and note retrieval

## Modules Breakdown

## 1. Note Management Module
\`\`\`cpp
addNote(Note note)           // Add single note
removeNote(size_t index)     // Remove note at position
first() const               // Get root note
_notes.size()               // Count total notes
\`\`\`

## 2. Transposition Module
\`\`\`cpp
transpose(int semitones)    // Shift all pitches by interval
transpose(Note targetPitch, int semitones) // Target-based transposition
\`\`\`

## 3. Duration Analysis Module
\`\`\`cpp
maxDuration() const         // Find longest note duration
// getTotalDuration()       // (commented out) Sum of all durations
\`\`\`

## 4. Chord Generation Module
\`\`\`cpp
getScale(Note root)         // Generate major scale chord
getArpeggio(Note root)      // Create arpeggiated version
null(NoteDurationType)      // Create silent/chord placeholder
empty()                     // Initialize blank chord
fromNote(Note)              // Convert single note to chord
\`\`\`

## Code Examples

## Basic Chord Creation
\`\`\`cpp
// Start with empty chord
Chord chord = Chord::empty();

// Build a C major chord
chord.addNote(Note(C, Quarter));
chord.addNote(E, MajorThird);
chord.addNote(G, PerfectFifth);
\`\`\`

## Transposition
\`\`\`cpp
// Take chord up by 3 semitones (minor third)
Chord transposed = original.transpose(3);

// Target-specific transposition
Chord modified = original.transpose(Note(F), 2);

// Generate a major scale from root note
Chord scale = Chord::getScale(rootNote);

// Create arpeggiated version
Chord arpeggio = Chord::getArpeggio(rootNote);

// Create null chord for silence/placeholder
Chord silent = Chord::null(NoteDurationType::Whole);
\`\`\`

## Best Practices & Design Patterns

### 1. Immutable Operations
Most operations return new \`Chord\` instances rather than modifying in-place, promoting functional programming style and preventing unintended side effects:

\`\`\`cpp
// Instead of mutating:
original.transpose(2);  // Modifies original - AVOID!

// Use immutable pattern:
auto modified = original.transpose(2);  // Creates new chord - PREFERRED!
\`\`\`

### 2. Const Correctness
Methods that don't modify state are marked \`const\`, enabling safe use with const references and improving API clarity:

\`\`\`cpp
size_t count() const;      // Safe to call on const Chord
bool isEmpty() const;      // Non-mutating query
int getDuration() const;   // Read-only access
\`\`\`

### 3. Factory Methods Pattern
Static factory methods provide clear, readable ways to create specialized chord instances:

\`\`\`cpp
// Clear intent through method naming
auto scale = Chord::getScale(C);      // Scale construction
auto empty = Chord::empty();          // Explicit initialization
auto nullChord = Chord::null(Whole);  // Special case handling
\`\`\`

## Common Use Cases & Workflows

### Workflow 1: Building a Progression
\`\`\`cpp
// Create root chord
Chord C_major = buildCmajor();

// Transpose to create progression
Chord G_major = C_major.transpose(7);      // Perfect fifth
Chord F_major = C_major.transpose(-5);     // Perfect fourth down

// Combine into sequence
std::vector<Chord> progression = {C_major, G_major, F_major};
\`\`\`

### Workflow 2: Dynamic Harmonic Analysis
\`\`\`cpp
// Analyze chord properties
size_t noteCount = chord.notes().size();
auto longestDuration = chord.maxDuration();
bool hasRoot = !chord.empty() && chord.first().isRoot;

// Check transposition validity
if (isValidTransposition(chord, targetPitch)) {
    auto transformed = chord.transposeTo(targetPitch);
}
\`\`\`

### Workflow 3: Arpeggiation & Variation
\`\`\`cpp
// Generate variations from base
Chord original = Chord::getScale(C4);
auto arpeggio1 = Chord::getArpeggio(original);
auto inverted = invertChord(arpeggio1);
auto rhythmVaried = applyRhythmPattern(inverted, pattern);
\`\`\`

## Next Steps & Expansion Areas

### Immediate Improvements
- **Duration Calculation**: Un-comment and implement \`getTotalDuration()\` for cumulative duration analysis
- **Validation**: Add input validation for note indices in \`removeNote\` to prevent out-of-bounds errors
- **Equality Operators**: Implement \`operator==\` and \`operator!=\` for chord comparison

### Future Features
1. **Chord Quality Detection**
   - Automatic identification of major, minor, diminished, augmented qualities
   - Inversion detection (root position vs first/third inversion)

2. **Harmonic Analysis Tools**
   - Key signature compatibility checking
   - Circle of fifths progression generation
   - Voice leading optimization suggestions

3. **Serialization Support**
   - Export to MusicXML format for DAW integration
   - JSON serialization for web applications
   - MIDI file generation capabilities

4. **Performance Optimizations**
   - Custom allocators for frequently-used note patterns
   - Move semantics implementation for large chord operations
   - SIMD acceleration for batch transposition operations

### Integration Opportunities
- Connect with audio synthesis engines (SuperCollider, Csound)
- Build GUI interfaces for visual chord editing
- Create web-based composition tools using WebAssembly compilation

`;

export default project;
