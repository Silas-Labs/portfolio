import SectionHeading from "../../components/SectionHeading"

function Projects() {
  return (
    <section id="work" className="mx-auto px-6 py-12 lg:px-10">
      <SectionHeading>Work</SectionHeading>

      <div className="max-w-3xl space-y-12">
        <div className="prose max-w-none">
          <h2 className="font-display font-medium text-xl sm:text-2xl mb-6">Guidely</h2>

          <h3 className="font-display font-semibold text-lg mb-4">Knowledge Assistant</h3>

          <p className="text-muted leading-relaxed mb-6">
            An internal knowledge assistant that allows users to upload documents and ask questions in plain language.
          </p>

          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="font-display font-medium text-accent text-uppercase tracking-[0.1em] mb-2">Problem</dt>
              <dd className="text-muted">
                Team knowledge scattered across documents, wikis, and chat history, making information difficult to find and reuse.
              </dd>
            </div>
            <div>
              <dt className="font-display font-medium text-accent text-uppercase tracking-[0.1em] mb-2">What Was Built</dt>
              <dd className="text-muted">
                React frontend with document upload, Pinecone vector storage, FastAPI backend, and LLM-powered query responses with source attribution.
              </dd>
            </div>
          </dl>

          <dl className="grid grid-cols-2 gap-4 text-sm mt-6">
            <div>
              <dt className="font-display font-medium text-accent text-uppercase tracking-[0.1em] mb-2">Technical Approach</dt>
              <dd className="text-muted">
                Document ingestion → text chunking → OpenAI embeddings → Pinecone vector search → LLM generation with retrieved context and source tracking.
              </dd>
            </div>
            <div>
              <dt className="font-display font-medium text-accent text-uppercase tracking-[0.1em] mb-2">Engineering Decisions</dt>
              <dd className="text-muted">
                Chunking strategy balancing retrieval precision with context coverage; retrieval threshold tuning to reduce hallucinations; source attribution added to every answer for accountability.
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-muted">
            <strong>Current state:</strong> Inactive internal tool; architecture documented for future revival.
          </p>
        </div>

        <div className="mt-12 pt-12 border-t border-accent/20">
          <h2 className="font-display font-medium text-xl sm:text-2xl mb-6">Computer Vision Project</h2>

          <h3 className="font-display font-semibold text-lg mb-4">Human Detection System</h3>

          <p className="text-muted leading-relaxed mb-6">
            Image and video input with object detection, person classification, bounding boxes, and real-time counting.
          </p>

          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="font-display font-medium text-accent text-uppercase tracking-[0.1em] mb-2">Problem</dt>
              <dd className="text-muted">
                Automated counting and classification of people in captured images and video streams for operational metrics.
              </dd>
            </div>
            <div>
              <dt className="font-display font-medium text-accent text-uppercase tracking-[0.1em] mb-2">What Was Built</dt>
              <dd className="text-muted">
                Computer vision pipeline with image/video input, YOLO-based object detection, person classification head, bounding box rendering, and frame-level counting output.
              </dd>
            </div>
          </dl>

          <dl className="grid grid-cols-2 gap-4 text-sm mt-6">
            <div>
              <dt className="font-display font-medium text-accent text-uppercase tracking-[0.1em] mb-2">Technical Approach</dt>
              <dd className="text-muted">
                Image/video input → pre-processing → object detection model → person classification → bounding box extraction → counting aggregation → display of results with visualized boxes.
              </dd>
            </div>
            <div>
              <dt className="font-display font-medium text-accent text-uppercase tracking-[0.1em] mb-2">Engineering Decisions</dt>
              <dd className="text-muted">
                Model selection balancing accuracy with inference speed; bounding box filtering to reduce false positives; counting logic handling occlusion and frame transitions; pipeline designed for both batch processing and real-time streaming.
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-muted">
            <strong>Current state:</strong> Prototype pipeline completed; architecture and code documented for potential productization.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects