/**
 * @openapi
 * components:
 *   schema:
 *     Error:
 *       type: object
 *       required:
 *        - status
 *        - message
 *       properties:
 *         status:
 *           type: number
 *         message:
 *           type: string
 */

export type Error = {
    status: number,
    message: string
}
