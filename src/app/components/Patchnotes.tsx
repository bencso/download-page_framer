import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Remarkable } from 'remarkable';

interface PatchNote {
    filename: string;
    content: string;
    title?: string;
}

export default function PatchNotesList() {
    const [patchNotes, setPatchNotes] = useState<PatchNote[]>([]);
    const [loading, setLoading] = useState(true);
    var md = new Remarkable();

    useEffect(() => {
        const loadPatchNotes = async () => {
            try {
                const files = ['001',"002"];
                
                const patchNotesData: PatchNote[] = [];
                
                for (const filename of files) {
                    try {
                        const response = await fetch(`/docs/${filename}-patch.md`);
                        if (response.ok) {
                            const content = await response.text();
                            let contentSplit = content.split('---');
                            const title = contentSplit[1].split("title:")[1];
                            
                            
                            patchNotesData.push({
                                filename,
                                content: md.render(contentSplit[2].trim()),
                                title
                            });

                        }
                    } catch (error) {
                        console.error(`Error loading ${filename}:`, error);
                    }
                }
                
                setPatchNotes(patchNotesData);
            } catch (error) {
                console.error('Error loading patch notes:', error);
            } finally {
                setLoading(false);
            }
        };

        loadPatchNotes();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center p-8">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-blue-chill-600 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    return (
        <div className="space-y-8 text-center">
            {patchNotes.map((patchNote, index) => (
                <motion.div
                    key={patchNote.filename}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6"
                    id={patchNote.filename}
                >
                    {patchNote.title && (
                        <h2 className="text-2xl font-bold text-blue-chill-800 mb-4">
                            {patchNote.title}
                        </h2>
                    )}
                    <div className="max-w-none">
                        <motion.div  initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3}} className="whitespace-pre-wrap text-sm text-blue-chill-700 innerhtml"  dangerouslySetInnerHTML={{__html: patchNote.content}}/>
                    </div>
                </motion.div>
            ))}
            {patchNotes.length === 0 && (
                <div className="text-center text-blue-chill-600 p-8">
                    No patch notes available.
                </div>
            )}
        </div>
    );
}